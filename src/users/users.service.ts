import { Injectable } from '@nestjs/common';
import { hash } from 'argon2';
import { PrismaService } from 'nestjs-prisma';
import {
  CreateOneUserArgs,
  FindManyUserArgs,
  User,
  UserWhereInput,
} from 'src/@generated/prisma-nestjs-graphql/user';
import { SeeProfileUserArgs } from 'src/users/dto/see-profile-user.args';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(findManyUserArgs: FindManyUserArgs): Promise<User[]> {
    return this.prisma.user.findMany(findManyUserArgs);
  }

  async seeProfile(seeProfileUserArgs: SeeProfileUserArgs): Promise<User> {
    try {
      const { username } = seeProfileUserArgs;
      const foundUser = await this.prisma.user.findUnique({
        where: { username },
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

  private async findExistingUser(
    userWhereInput: UserWhereInput,
  ): Promise<User> {
    return this.prisma.user.findFirst({ where: userWhereInput });
  }

  // create(createUserInput: CreateUserInput) {
  //   return 'This action adds a new user';
  // }
  // findAll() {
  //   return `This action returns all users`;
  // }
  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }
  // update(id: number, updateUserInput: UpdateUserInput) {
  //   return `This action updates a #${id} user`;
  // }
  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
