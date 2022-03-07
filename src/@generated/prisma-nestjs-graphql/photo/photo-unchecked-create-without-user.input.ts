import { Field, InputType, HideField } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Upload from 'graphql-upload';
import { HashtagUncheckedCreateNestedManyWithoutPhotosInput } from '../hashtag/hashtag-unchecked-create-nested-many-without-photos.input';

@InputType()
export class PhotoUncheckedCreateWithoutUserInput {
  @Field(() => Scalars.GraphQLUUID, { nullable: true })
  id?: string;

  @Field(() => Upload.GraphQLUpload, { nullable: true })
  file?: string;

  @Field(() => String, { nullable: true })
  photoOutputUrl?: string;

  @Field(() => String, { nullable: true })
  caption?: string;

  @Field(() => HashtagUncheckedCreateNestedManyWithoutPhotosInput, {
    nullable: true,
  })
  hashtags?: HashtagUncheckedCreateNestedManyWithoutPhotosInput;

  @HideField()
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;
}
