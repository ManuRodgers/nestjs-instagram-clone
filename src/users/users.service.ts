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
import { SeeProfileUserArgs } from 'src/users/dto/see-profile-user.args';

import { FollowUserInput } from './dto/follow-user.input';
import { FollowUserOutput } from './dto/follow-user.output';
import { UnFollowUserInput } from './dto/unFollow-user.input';
import { UnFollowUserOutput } from './dto/unFollow-user.output';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(findManyUserArgs: FindManyUserArgs): Promise<User[]> {
    return this.prisma.user.findMany(findManyUserArgs);
  }

  async seeProfile({ username }: SeeProfileUserArgs): Promise<User> {
    try {
      const foundUser = await this.prisma.user.findUnique({
        where: { username },
        // include: { following: true }, but we usually don't need to include for performance reasons
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
      });
      if (!foundUser) {
        throw new Error(`User with username ${username} not found`);
      }
      const followingUsers = await this.getFollowingUsers(userId);
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
      });
      if (!foundUser) {
        throw new Error(`User with username ${username} not found`);
      }
      const followingUsers = await this.getFollowingUsers(userId);
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

  private async getFollowingUsers(userId: string): Promise<User[]> {
    return this.prisma.user
      .findUnique({
        where: { id: userId },
      })
      .following();
  }
}
