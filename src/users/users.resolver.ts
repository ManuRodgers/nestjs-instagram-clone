import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  User,
  CreateOneUserArgs,
  FindManyUserArgs,
} from 'src/@generated/prisma-nestjs-graphql/user';

import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  async createUser(
    @Args() createOneUserArgs: CreateOneUserArgs,
  ): Promise<User> {
    return this.usersService.create(createOneUserArgs);
  }

  @Query(() => [User], { name: 'users' })
  async findAll(@Args() findManyUserArgs: FindManyUserArgs): Promise<User[]> {
    return this.usersService.findAll(findManyUserArgs);
  }

  // @Query(() => User, { name: 'user' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.usersService.findOne(id);
  // }

  // @Mutation(() => User)
  // updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
  //   return this.usersService.update(updateUserInput.id, updateUserInput);
  // }

  // @Mutation(() => User)
  // removeUser(@Args('id', { type: () => Int }) id: number) {
  //   return this.usersService.remove(id);
  // }
}
