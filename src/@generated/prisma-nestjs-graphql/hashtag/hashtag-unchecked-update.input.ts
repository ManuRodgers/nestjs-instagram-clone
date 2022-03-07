import { Field, InputType, HideField } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { PhotoUncheckedUpdateManyWithoutHashtagsInput } from '../photo/photo-unchecked-update-many-without-hashtags.input';

@InputType()
export class HashtagUncheckedUpdateInput {
  @Field(() => Scalars.GraphQLUUID, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  hashtag?: string;

  @Field(() => PhotoUncheckedUpdateManyWithoutHashtagsInput, { nullable: true })
  photos?: PhotoUncheckedUpdateManyWithoutHashtagsInput;

  @HideField()
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;
}
