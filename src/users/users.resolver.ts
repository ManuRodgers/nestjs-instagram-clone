import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import {
  FindManyUserArgs,
  User,
  UserUpdateInput,
} from 'src/@generated/prisma-nestjs-graphql/user';
import { CurrentUserId } from 'src/auth/decorators/current-user-id.decorator';
import { SeeProfileInput } from 'src/users/dto/see-profile.input';

import { FollowUserInput } from './dto/follow-user.input';
import { FollowUserOutput } from './dto/follow-user.output';
import { UnFollowUserInput } from './dto/unFollow-user.input';
import { UnFollowUserOutput } from './dto/unFollow-user.output';
import { UsersService } from './users.service';
import { SeeFollowersOutput } from './dto/see-followers.output';
import { SeeFollowersInput } from './dto/see-followers.input';
import { SeeFollowingOutput } from './dto/see-following.output';
import { SeeFollowingInput } from './dto/see-following.input';
import { SeeProfileOutput } from './dto/see-profile.output';
import { SearchUserInput } from './dto/search-user.input';

@Resolver(() => SeeProfileOutput)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User], { name: 'users' })
  async findAll(@Args() findManyUserArgs: FindManyUserArgs): Promise<User[]> {
    return this.usersService.findAll(findManyUserArgs);
  }

  @Query(() => [User])
  async searchUser(
    @Args('searchUserInput') searchUserInput: SearchUserInput,
  ): Promise<User[]> {
    return this.usersService.searchUser(searchUserInput);
  }

  @Query(() => SeeProfileOutput)
  async seeProfile(
    @Args('seeProfileInput') seeProfileInput: SeeProfileInput,
  ): Promise<SeeProfileOutput> {
    return this.usersService.seeProfile(seeProfileInput);
  }

  @ResolveField('totalFollowing', () => Int)
  async getTotalFollowing(@Parent() { id }: SeeProfileOutput): Promise<number> {
    return this.usersService.getTotalFollowing(id);
  }

  @ResolveField('totalFollowers', () => Int)
  async getTotalFollowers(@Parent() { id }: SeeProfileOutput): Promise<number> {
    return this.usersService.getTotalFollowers(id);
  }
  @ResolveField('isMe', () => Boolean)
  async getIsMe(
    @Parent() { id }: SeeProfileOutput,
    @CurrentUserId() userId: string,
  ): Promise<boolean> {
    return id === userId;
  }
  @ResolveField('isFollowing', () => Boolean)
  async getIsFollowing(
    @Parent() { id }: SeeProfileOutput,
    @CurrentUserId() currentUserId: string,
  ): Promise<boolean> {
    return this.usersService.getIsFollowing(id, currentUserId);
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

  @Mutation(() => SeeFollowersOutput)
  async seeFollowers(
    @Args('seeFollowersInput') seeFollowersInput: SeeFollowersInput,
  ): Promise<SeeFollowersOutput> {
    return this.usersService.seeFollowers(seeFollowersInput);
  }
  @Mutation(() => SeeFollowingOutput)
  async seeFollowing(
    @Args('seeFollowingInput') seeFollowingInput: SeeFollowingInput,
  ): Promise<SeeFollowingOutput> {
    return this.usersService.seeFollowing(seeFollowingInput);
  }
}
