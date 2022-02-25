import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user';

import { AuthService } from './auth.service';
import { CurrentRefreshToken } from './decorators/current-refresh-token.decorator';
import { CurrentUserId } from './decorators/current-user-id.decorator';
import { Public } from './decorators/public.decorator';
import { AuthResult } from './dto/auth-result.output';
import { LoginUserInput } from './dto/login-user.input';
import { LogoutResult } from './dto/logout-result.output';
import { GraphqlRefreshTokenAuthGuard } from './guards/graphql-refresh-token-auth.guard';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthResult)
  @Public()
  async signup(
    @Args() createOneUserArgs: CreateOneUserArgs,
  ): Promise<AuthResult> {
    return this.authService.signup(createOneUserArgs);
  }

  @Mutation(() => AuthResult)
  @Public()
  async signIn(
    @Args('loginUserInput') loginUserInput: LoginUserInput,
  ): Promise<AuthResult> {
    return this.authService.signIn(loginUserInput);
  }

  @Mutation(() => AuthResult)
  @Public()
  @UseGuards(GraphqlRefreshTokenAuthGuard)
  async refresh(
    @CurrentUserId() userId: string,
    @CurrentRefreshToken() refreshToken: string,
  ): Promise<AuthResult> {
    return this.authService.refresh(userId, refreshToken);
  }

  @Mutation(() => LogoutResult)
  async logout(@CurrentUserId() userId: string): Promise<LogoutResult> {
    return this.authService.logout(userId);
  }
}
