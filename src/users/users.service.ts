import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import {
  CreateOneUserArgs,
  FindManyUserArgs,
  User,
} from 'src/@generated/prisma-nestjs-graphql/user';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createOneUserArgs: CreateOneUserArgs): Promise<User> {
    return this.prisma.user.create(createOneUserArgs);
  }
  async findAll(findManyUserArgs: FindManyUserArgs): Promise<User[]> {
    return this.prisma.user.findMany(findManyUserArgs);
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
