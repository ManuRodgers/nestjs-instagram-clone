import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  FindManyUserArgs,
  User,
  UserUpdateInput,
} from 'src/@generated/prisma-nestjs-graphql/user';
import { CurrentUserId } from 'src/auth/decorators/current-user-id.decorator';
import { SeeProfileUserArgs } from 'src/users/dto/see-profile-user.args';

import { FollowUserInput } from './dto/follow-user.input';
import { FollowUserOutput } from './dto/follow-user.output';
import { UnFollowUserInput } from './dto/unFollow-user.input';
import { UnFollowUserOutput } from './dto/unFollow-user.output';
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

  @Mutation(() => User)
  async updateProfile(
    @Args('userUpdateInput')
    userUpdateInput: UserUpdateInput,
    @CurrentUserId() userId: string,
  ): Promise<User> {
    return this.usersService.updateProfile(userUpdateInput, userId);
  }

  @Mutation(() => FollowUserOutput)
  async followUser(
    @Args('followUserInput') followUserInput: FollowUserInput,
    @CurrentUserId() userId: string,
  ): Promise<FollowUserOutput> {
    return this.usersService.followUser(followUserInput, userId);
  }
  @Mutation(() => UnFollowUserOutput)
  async unFollowUser(
    @Args('unFollowUserInput') unFollowUserInput: UnFollowUserInput,
    @CurrentUserId() userId: string,
  ): Promise<UnFollowUserOutput> {
    return this.usersService.unFollowUser(unFollowUserInput, userId);
  }

  // @Query(() => User, { name: 'user' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.usersService.findOne(id);
  // }

  // @Mutation(() => User)
  // removeUser(@Args('id', { type: () => Int }) id: number) {
  //   return this.usersService.remove(id);
  // }
}
