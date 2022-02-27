import { Injectable, ForbiddenException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { hash, verify } from 'argon2';
import { PrismaService } from 'nestjs-prisma';
import { CreateOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user';

import { User } from '../@generated/prisma-nestjs-graphql/user/user.model';
import { UsersService } from '../users/users.service';
import { AuthResult } from './dto/auth-result.output';
import { JwtPayload } from './dto/jwt-payload.input';
import { LoginUserInput } from './dto/login-user.input';
import { LogoutResult } from './dto/logout-result.output';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
  ) {}

  async signup(createOneUserArgs: CreateOneUserArgs): Promise<AuthResult> {
    try {
      const {
        data: { email, firstName, password, username, lastName },
      } = createOneUserArgs;
      // check if user already exists
      const existingUser = await this.prisma.user.findFirst({
        where: {
          OR: [{ email }, { username }],
        },
      });
      if (existingUser) {
        throw new Error(
          `User with email ${email} or username ${username} already exists`,
        );
      }
      //  hash password and create user
      const uglyPassword = await hash(password);
      const newUser = await this.prisma.user.create({
        data: {
          email,
          username,
          firstName,
          lastName,
          password: uglyPassword,
        },
      });
      const { accessToken, refreshToken } = await this.generateTokens(
        newUser.id,
        newUser.username,
      );

      await this.updateRefreshToken(newUser.id, refreshToken);
      return {
        ok: true,
        accessToken,
        refreshToken,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message,
      };
    }
  }

  async signIn(loginUserInput: LoginUserInput): Promise<AuthResult> {
    try {
      const { username, password } = loginUserInput;
      const user = await this.validateUser(username, password);
      if (!user) {
        throw new Error('Invalid username or password');
      }
      const { accessToken, refreshToken } = await this.generateTokens(
        user.id,
        user.username,
      );
      await this.updateRefreshToken(user.id, refreshToken);
      return {
        ok: true,
        accessToken,
        refreshToken,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message,
      };
    }
  }

  async logout(userId: string): Promise<LogoutResult> {
    await this.prisma.user.updateMany({
      where: {
        id: userId,
        refreshToken: {
          not: null,
        },
      },
      data: {
        refreshToken: null,
      },
    });
    return { ok: true };
  }

  async refresh(userId: string, refreshToken: string): Promise<AuthResult> {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          id: userId,
        },
      });
      if (!user || !user.refreshToken)
        throw new ForbiddenException('Access denied');
      const refreshTokenOk = await verify(user.refreshToken, refreshToken);
      if (!refreshTokenOk) throw new ForbiddenException('Access denied');
      const { accessToken, refreshToken: newRefreshToken } =
        await this.generateTokens(userId, user.username);
      await this.updateRefreshToken(userId, newRefreshToken);
      return {
        ok: true,
        accessToken,
        refreshToken: newRefreshToken,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message,
      };
    }
  }

  private async generateTokens(
    userId: string,
    username: string,
  ): Promise<Pick<AuthResult, 'accessToken' | 'refreshToken'>> {
    const payload: JwtPayload = { username, sub: userId };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: this.config.get<string>('JWT_ACCESS_TOKEN_SECRET'),
        expiresIn: this.config.get<string>('JWT_ACCESS_TOKEN_EXPIRATION_TIME'),
      }),
      this.jwtService.signAsync(payload, {
        secret: this.config.get<string>('JWT_REFRESH_TOKEN_SECRET'),
        expiresIn: this.config.get<string>('JWT_REFRESH_TOKEN_EXPIRATION_TIME'),
      }),
    ]);
    return { accessToken, refreshToken };
  }

  private async updateRefreshToken(
    userId: string,
    refreshToken: string,
  ): Promise<void> {
    const uglyRefreshToken = await hash(refreshToken);
    await this.prisma.user.update({
      where: { id: userId },
      data: { refreshToken: uglyRefreshToken },
    });
  }

  private async validateUser(
    username: string,
    password: string,
  ): Promise<User | null> {
    const foundUser = await this.usersService.seeProfile({ username });
    const passwordOk = await verify(foundUser.password, password);
    if (foundUser && passwordOk) {
      return foundUser;
    }
    return null;
  }
}
