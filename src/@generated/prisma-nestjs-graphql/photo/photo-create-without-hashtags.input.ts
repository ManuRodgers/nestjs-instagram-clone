import { Field, InputType, HideField } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Upload from 'graphql-upload';
import { UserCreateNestedOneWithoutPhotosInput } from '../user/user-create-nested-one-without-photos.input';

@InputType()
export class PhotoCreateWithoutHashtagsInput {
  @Field(() => Scalars.GraphQLUUID, { nullable: true })
  id?: string;

  @Field(() => Upload.GraphQLUpload, { nullable: true })
  file?: string;

  @Field(() => String, { nullable: true })
  photoOutputUrl?: string;

  @Field(() => String, { nullable: true })
  caption?: string;

  @Field(() => UserCreateNestedOneWithoutPhotosInput, { nullable: false })
  user!: UserCreateNestedOneWithoutPhotosInput;

  @HideField()
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;
}
