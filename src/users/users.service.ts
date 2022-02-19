import { Injectable } from '@nestjs/common';
import { hash } from 'argon2';
import { PrismaService } from 'nestjs-prisma';
import {
  CreateOneUserArgs,
  FindManyUserArgs,
  User,
  UserWhereInput,
} from 'src/@generated/prisma-nestjs-graphql/user';
import { SeeProfileUserArgs } from './dto/see-profile-user.args';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createOneUserArgs: CreateOneUserArgs): Promise<User> {
    try {
      const {
        data: { email, username, firstName, password, lastName },
      } = createOneUserArgs;
      // Check if user already exists
      const existingUser = await this.findExistingUser({
        OR: [{ email }, { username }],
      });
      if (existingUser) {
        throw new Error(
          `User with email ${email} or username ${username} already exists`,
        );
      }
      // hash password
      const uglyPassword = await hash(password);

      //  create user
      return this.prisma.user.create({
        data: {
          email,
          username,
          firstName,
          lastName,
          password: uglyPassword,
        },
      });
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async findAll(findManyUserArgs: FindManyUserArgs): Promise<User[]> {
    return this.prisma.user.findMany(findManyUserArgs);
  }

  private async findExistingUser(
    userWhereInput: UserWhereInput,
  ): Promise<User> {
    return this.prisma.user.findFirst({ where: userWhereInput });
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
