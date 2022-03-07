import { Field, InputType, HideField } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Upload from 'graphql-upload';
import { HashtagCreateNestedManyWithoutPhotosInput } from '../hashtag/hashtag-create-nested-many-without-photos.input';

@InputType()
export class PhotoCreateWithoutUserInput {
  @Field(() => Scalars.GraphQLUUID, { nullable: true })
  id?: string;

  @Field(() => Upload.GraphQLUpload, { nullable: true })
  file?: string;

  @Field(() => String, { nullable: true })
  photoOutputUrl?: string;

  @Field(() => String, { nullable: true })
  caption?: string;

  @Field(() => HashtagCreateNestedManyWithoutPhotosInput, { nullable: true })
  hashtags?: HashtagCreateNestedManyWithoutPhotosInput;

  @HideField()
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;
}
