import { Field, InputType, HideField } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { PhotoUpdateManyWithoutHashtagsInput } from '../photo/photo-update-many-without-hashtags.input';

@InputType()
export class HashtagUpdateInput {
  @Field(() => Scalars.GraphQLUUID, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  hashtag?: string;

  @Field(() => PhotoUpdateManyWithoutHashtagsInput, { nullable: true })
  photos?: PhotoUpdateManyWithoutHashtagsInput;

  @HideField()
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;
}
