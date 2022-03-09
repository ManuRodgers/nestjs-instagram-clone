import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
import { Hashtag } from 'src/@generated/prisma-nestjs-graphql/hashtag';
import { User } from 'src/@generated/prisma-nestjs-graphql/user';

@ObjectType()
export class SeePhotoOutput {
  @Field(() => GraphQLUUID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: true })
  file?: string | null;

  @Field(() => String, { nullable: true })
  photoOutputUrl?: string | null;

  @Field(() => String, { nullable: true })
  caption?: string | null;

  @Field(() => GraphQLUUID, { nullable: true })
  userId?: string | null;

  @Field(() => User, { nullable: false })
  user?: User | null;

  @Field(() => [Hashtag], { nullable: true })
  hashtags?: Array<Hashtag> | null;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | null;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | null;
}
