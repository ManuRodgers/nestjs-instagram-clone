import { Field, InputType, HideField } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';

@InputType()
export class HashtagUpdateWithoutPhotosInput {
  @Field(() => Scalars.GraphQLUUID, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  hashtag?: string;

  @HideField()
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;
}
