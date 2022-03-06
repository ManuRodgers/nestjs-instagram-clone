import { Injectable } from '@nestjs/common';
import { hash } from 'argon2';
import { createWriteStream } from 'fs';
import { FileUpload } from 'graphql-upload';
import { PrismaService } from 'nestjs-prisma';
import {
  FindManyUserArgs,
  User,
  UserUpdateInput,
} from 'src/@generated/prisma-nestjs-graphql/user';
import { SeeProfileInput } from 'src/users/dto/see-profile.input';

import { FollowUserInput } from './dto/follow-user.input';
import { FollowUserOutput } from './dto/follow-user.output';
import { SeeFollowersInput } from './dto/see-followers.input';
import { UnFollowUserInput } from './dto/unFollow-user.input';
import { UnFollowUserOutput } from './dto/unFollow-user.output';
import { SeeFollowersOutput } from './dto/see-followers.output';
import { SeeFollowingInput } from './dto/see-following.input';
import { SeeFollowingOutput } from './dto/see-following.output';
import { SearchUserInput } from './dto/search-user.input';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(findManyUserArgs: FindManyUserArgs): Promise<User[]> {
    return this.prisma.user.findMany(findManyUserArgs);
  }

  async seeProfile({ username }: SeeProfileInput): Promise<User> {
    try {
      const foundUser = await this.prisma.user.findUnique({
        where: { username },
        // include: { following: true },  but we usually don't need to include for performance reasons
      });
      if (!foundUser) {
        throw new Error(`User with username ${username} not found`);
      }
      return foundUser;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async updateProfile(
    userUpdateInput: UserUpdateInput,
    userId: string,
  ): Promise<User> {
    try {
      const { password, email, firstName, lastName, username, bio } =
        userUpdateInput;
      let avatarUrl = null;
      if (userUpdateInput.avatar) {
        const promiseAvatar =
          userUpdateInput.avatar as unknown as Promise<FileUpload>;
        const { createReadStream, filename } = await promiseAvatar;
        const newFileName = `${userId}-${Date.now()}-${filename}`;

        const readStream = createReadStream(); //  source file stream
        const writeStream = createWriteStream(
          process.cwd() + '/uploads/' + newFileName,
        ); // destination file stream
        readStream.pipe(writeStream);
        avatarUrl = `http://localhost:7000/static/${newFileName}`;
      }
      let uglyPassword = null;
      if (password) {
        uglyPassword = await hash(password);
      }
      return this.prisma.user.update({
        where: { id: userId },
        data: {
          email,
          username,
          firstName,
          lastName,
          bio,
          ...(uglyPassword && { password: uglyPassword }),
          ...(avatarUrl && { avatarOutputUrl: avatarUrl }),
        },
      });
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async followUser(
    followUserInput: FollowUserInput,
    userId: string,
  ): Promise<FollowUserOutput> {
    try {
      const { username } = followUserInput;
      const foundUser = await this.prisma.user.findUnique({
        where: { username },
        select: { id: true },
      });
      if (!foundUser) {
        throw new Error(`User with username ${username} not found`);
      }
      const followingUsers = await this.prisma.user
        .findUnique({
          where: { id: userId },
        })
        .following();
      if (followingUsers.map((item) => item.username).includes(username)) {
        throw new Error(`User with username ${username} already followed`);
      }

      await this.prisma.user.update({
        where: { id: userId },
        data: {
          following: {
            connect: { username },
          },
        },
      });
      return {
        ok: true,
      };
    } catch (error) {
      console.error(error);
      return {
        ok: false,
        error: error.message,
      };
    }
  }

  async unFollowUser(
    unFollowUserInput: UnFollowUserInput,
    userId: string,
  ): Promise<UnFollowUserOutput> {
    try {
      const { username } = unFollowUserInput;
      const foundUser = await this.prisma.user.findUnique({
        where: { username },
        select: { id: true },
      });
      if (!foundUser) {
        throw new Error(`User with username ${username} not found`);
      }
      const followingUsers = await this.prisma.user
        .findUnique({
          where: { id: userId },
        })
        .following();
      if (!followingUsers.map((item) => item.username).includes(username)) {
        throw new Error(`User with username ${username} not followed`);
      }
      await this.prisma.user.update({
        where: { id: userId },
        data: {
          following: {
            disconnect: { username },
          },
        },
      });
      return {
        ok: true,
      };
    } catch (error) {
      console.error(error);
      return {
        ok: false,
        error: error.message,
      };
    }
  }

  // offset pagination
  async seeFollowers({
    username,
    pageNum,
    pageSize,
  }: SeeFollowersInput): Promise<SeeFollowersOutput> {
    try {
      const foundUser = await this.prisma.user.findUnique({
        where: { username },
        select: { id: true },
      });
      if (!foundUser) {
        throw new Error(`User with username ${username} not found`);
      }
      const followers = await this.prisma.user
        .findUnique({ where: { username } })
        .followers({
          take: pageSize,
          skip: pageSize * (pageNum - 1),
        });
      const totalPages = await this.prisma.user.count({
        where: { following: { some: { username } } },
      });
      return {
        ok: true,
        followers,
        totalPages,
      };
    } catch (error) {
      console.error(error);
      return {
        ok: false,
        error: error.message,
      };
    }
  }

  // cursor pagination
  async seeFollowing({
    pageSize,
    username,
    currentCursor,
  }: SeeFollowingInput): Promise<SeeFollowingOutput> {
    try {
      const foundUser = await this.prisma.user.findUnique({
        where: { username },
        select: { id: true },
      });
      if (!foundUser) {
        throw new Error(`User with username ${username} not found`);
      }
      const following = await this.prisma.user
        .findUnique({ where: { username } })
        .following(this.getCursorPaginationObject(pageSize, currentCursor));
      return {
        ok: true,
        following,
        hasMore: following.length === 0 ? false : true,
      };
    } catch (error) {
      console.error(error);
      return {
        ok: false,
        error: error.message,
      };
    }
  }

  async searchUser({
    keyword,
    currentCursor,
    pageSize,
  }: SearchUserInput): Promise<User[]> {
    return await this.prisma.user.findMany({
      where: {
        username: { startsWith: keyword },
      },
      ...this.getCursorPaginationObject(pageSize, currentCursor),
      orderBy: {
        username: 'asc',
      },
    });
  }

  private getCursorPaginationObject(
    pageSize: number,
    currentCursor?: string,
  ): {
    cursor: {
      id: string;
    };
    take: number;
    skip: number;
  } {
    return {
      take: pageSize,
      skip: currentCursor ? 1 : 0,
      ...(currentCursor && {
        cursor: {
          id: currentCursor,
        },
      }),
    };
  }

  async getTotalFollowing(id: string): Promise<number> {
    try {
      return await this.prisma.user.count({
        where: { followers: { some: { id } } },
      });
    } catch (error) {
      console.error(error);
      return error;
    }
  }
  async getTotalFollowers(id: string): Promise<number> {
    try {
      return await this.prisma.user.count({
        where: { following: { some: { id } } },
      });
    } catch (error) {
      console.error(error);
      return error;
    }
  }
  async getIsFollowing(id: string, currentUserId: string): Promise<boolean> {
    // yourself can't follow yourself
    if (id === currentUserId) {
      return false;
    }
    const isFollowing = await this.prisma.user
      .findUnique({
        where: { id: currentUserId },
      })
      .following();
    return isFollowing.map((item) => item.id).includes(id);
  }
}
