import { Field, InputType, HideField } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Upload from 'graphql-upload';
import { UserUpdateOneRequiredWithoutPhotosInput } from '../user/user-update-one-required-without-photos.input';

@InputType()
export class PhotoUpdateWithoutHashtagsInput {
  @Field(() => Scalars.GraphQLUUID, { nullable: true })
  id?: string;

  @Field(() => Upload.GraphQLUpload, { nullable: true })
  file?: string;

  @Field(() => String, { nullable: true })
  photoOutputUrl?: string;

  @Field(() => String, { nullable: true })
  caption?: string;

  @Field(() => UserUpdateOneRequiredWithoutPhotosInput, { nullable: true })
  user?: UserUpdateOneRequiredWithoutPhotosInput;

  @HideField()
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;
}
