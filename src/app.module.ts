import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaModule } from 'nestjs-prisma';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { GraphqlJwtAuthGuard } from './auth/guards/graphql-jwt-auth.guard';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PhotosModule } from './photos/photos.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      debug: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      subscriptions: {
        'graphql-ws': true,
      },
    }),
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        middlewares: [
          async (params, next) => {
            const before = Date.now();
            const result = await next(params);
            const after = Date.now();
            console.log(
              `Query ${params.model}.${params.action} took ${after - before}ms`,
            );
            return result;
          },
        ],
      },
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/static',
    }),
    UsersModule,
    AuthModule,
    PhotosModule,
  ],
  providers: [{ provide: APP_GUARD, useClass: GraphqlJwtAuthGuard }],
})
export class AppModule {}
