import { Field, InputType, HideField } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Upload from 'graphql-upload';
import { UserUncheckedCreateNestedManyWithoutFollowersInput } from './user-unchecked-create-nested-many-without-followers.input';
import { UserUncheckedCreateNestedManyWithoutFollowingInput } from './user-unchecked-create-nested-many-without-following.input';

@InputType()
export class UserUncheckedCreateWithoutPhotosInput {
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

  @HideField()
  following?: UserUncheckedCreateNestedManyWithoutFollowersInput;

  @HideField()
  followers?: UserUncheckedCreateNestedManyWithoutFollowingInput;

  @HideField()
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;
}
