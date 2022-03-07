import { Field, InputType, HideField } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Upload from 'graphql-upload';
import { HashtagUpdateManyWithoutPhotosInput } from '../hashtag/hashtag-update-many-without-photos.input';

@InputType()
export class PhotoUpdateWithoutUserInput {
  @Field(() => Scalars.GraphQLUUID, { nullable: true })
  id?: string;

  @Field(() => Upload.GraphQLUpload, { nullable: true })
  file?: string;

  @Field(() => String, { nullable: true })
  photoOutputUrl?: string;

  @Field(() => String, { nullable: true })
  caption?: string;

  @Field(() => HashtagUpdateManyWithoutPhotosInput, { nullable: true })
  hashtags?: HashtagUpdateManyWithoutPhotosInput;

  @HideField()
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;
}
