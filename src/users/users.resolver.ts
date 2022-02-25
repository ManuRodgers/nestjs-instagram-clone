import { Args, Query, Resolver } from '@nestjs/graphql';
import {
  FindManyUserArgs,
  User,
} from 'src/@generated/prisma-nestjs-graphql/user';
import { SeeProfileUserArgs } from 'src/users/dto/see-profile-user.args';

import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User], { name: 'users' })
  async findAll(@Args() findManyUserArgs: FindManyUserArgs): Promise<User[]> {
    return this.usersService.findAll(findManyUserArgs);
  }

  @Query(() => User, { name: 'seeProfile' })
  async seeProfile(
    @Args() seeProfileUserArgs: SeeProfileUserArgs,
  ): Promise<User> {
    return this.usersService.seeProfile(seeProfileUserArgs);
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
