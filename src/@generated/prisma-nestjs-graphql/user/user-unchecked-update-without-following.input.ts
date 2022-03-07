import { Field, InputType, HideField } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Upload from 'graphql-upload';
import { UserUncheckedUpdateManyWithoutFollowingInput } from './user-unchecked-update-many-without-following.input';
import { PhotoUncheckedUpdateManyWithoutUserInput } from '../photo/photo-unchecked-update-many-without-user.input';

@InputType()
export class UserUncheckedUpdateWithoutFollowingInput {
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
  followers?: UserUncheckedUpdateManyWithoutFollowingInput;

  @Field(() => PhotoUncheckedUpdateManyWithoutUserInput, { nullable: true })
  photos?: PhotoUncheckedUpdateManyWithoutUserInput;

  @HideField()
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;
}
