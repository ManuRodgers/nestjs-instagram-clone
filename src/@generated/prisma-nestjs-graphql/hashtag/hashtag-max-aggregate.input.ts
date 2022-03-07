import { Field, InputType, HideField } from '@nestjs/graphql';

@InputType()
export class HashtagMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  hashtag?: true;

  @HideField()
  createdAt?: true;

  @HideField()
  updatedAt?: true;
}
