import { Field, InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';

@InputType()
export class HashtagWhereUniqueInput {
  @Field(() => Scalars.GraphQLUUID, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  hashtag?: string;
}
