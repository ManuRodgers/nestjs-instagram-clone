import { Field, InputType, HideField } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Upload from 'graphql-upload';
import { UserCreateNestedManyWithoutFollowersInput } from './user-create-nested-many-without-followers.input';

@InputType()
export class UserCreateWithoutFollowersInput {
  @HideField()
  id?: string;

  @Field(() => String, { nullable: false })
  firstName!: string;

  @Field(() => String, { nullable: true })
  lastName?: string;

  @Field(() => String, { nullable: false })
  username!: string;

  @Field(() => Scalars.GraphQLEmailAddress, { nullable: false })
  email!: string;

  @Field(() => Boolean, { nullable: true })
  isEmailVerified?: boolean;

  @Field(() => String, { nullable: false })
  password!: string;

  @HideField()
  refreshToken?: string;

  @Field(() => String, { nullable: true })
  bio?: string;

  @Field(() => Upload.GraphQLUpload, { nullable: true })
  avatar?: string;

  @Field(() => String, { nullable: true })
  avatarOutputUrl?: string;

  @Field(() => UserCreateNestedManyWithoutFollowersInput, { nullable: true })
  following?: UserCreateNestedManyWithoutFollowersInput;

  @HideField()
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;
}
