import { Field, InputType, HideField } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Upload from 'graphql-upload';
import { UserUncheckedCreateNestedManyWithoutFollowingInput } from './user-unchecked-create-nested-many-without-following.input';
import { PhotoUncheckedCreateNestedManyWithoutUserInput } from '../photo/photo-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutFollowingInput {
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
  followers?: UserUncheckedCreateNestedManyWithoutFollowingInput;

  @Field(() => PhotoUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  photos?: PhotoUncheckedCreateNestedManyWithoutUserInput;

  @HideField()
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;
}
