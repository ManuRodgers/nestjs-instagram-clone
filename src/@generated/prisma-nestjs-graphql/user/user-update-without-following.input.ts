import { Field, InputType, HideField } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Upload from 'graphql-upload';
import { UserUpdateManyWithoutFollowingInput } from './user-update-many-without-following.input';
import { PhotoUpdateManyWithoutUserInput } from '../photo/photo-update-many-without-user.input';

@InputType()
export class UserUpdateWithoutFollowingInput {
  @HideField()
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

  @Field(() => String, { nullable: true })
  password?: string;

  @HideField()
  refreshToken?: string;

  @Field(() => String, { nullable: true })
  bio?: string;

  @Field(() => Upload.GraphQLUpload, { nullable: true })
  avatar?: string;

  @Field(() => String, { nullable: true })
  avatarOutputUrl?: string;

  @HideField()
  followers?: UserUpdateManyWithoutFollowingInput;

  @Field(() => PhotoUpdateManyWithoutUserInput, { nullable: true })
  photos?: PhotoUpdateManyWithoutUserInput;

  @HideField()
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;
}
