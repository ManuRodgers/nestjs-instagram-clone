import { Field, ObjectType, HideField } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Upload from 'graphql-upload';

@ObjectType()
export class UserMaxAggregate {
  @Field(() => Scalars.GraphQLUUID, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  firstName?: string;

  @Field(() => String, { nullable: true })
  lastName?: string;

  @Field(() => String, { nullable: true })
  username?: string;

  @Field(() => Scalars.GraphQLEmailAddress, { nullable: true })
  email?: string;

  @Field(() => Boolean, { nullable: true })
  isEmailVerified?: boolean;

  @HideField()
  password?: string;

  @Field(() => String, { nullable: true })
  refreshToken?: string;

  @Field(() => String, { nullable: true })
  bio?: string;

  @Field(() => Upload.GraphQLUpload, { nullable: true })
  avatar?: string;

  @Field(() => String, { nullable: true })
  avatarOutputUrl?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}
