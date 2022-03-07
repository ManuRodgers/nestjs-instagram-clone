import { Field, InputType, HideField } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Upload from 'graphql-upload';
import { HashtagUncheckedUpdateManyWithoutPhotosInput } from '../hashtag/hashtag-unchecked-update-many-without-photos.input';

@InputType()
export class PhotoUncheckedUpdateWithoutUserInput {
  @Field(() => Scalars.GraphQLUUID, { nullable: true })
  id?: string;

  @Field(() => Upload.GraphQLUpload, { nullable: true })
  file?: string;

  @Field(() => String, { nullable: true })
  photoOutputUrl?: string;

  @Field(() => String, { nullable: true })
  caption?: string;

  @Field(() => HashtagUncheckedUpdateManyWithoutPhotosInput, { nullable: true })
  hashtags?: HashtagUncheckedUpdateManyWithoutPhotosInput;

  @HideField()
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;
}
