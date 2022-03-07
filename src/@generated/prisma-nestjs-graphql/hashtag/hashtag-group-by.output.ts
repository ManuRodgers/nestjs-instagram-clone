import { Field, ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { HashtagCountAggregate } from './hashtag-count-aggregate.output';
import { HashtagMinAggregate } from './hashtag-min-aggregate.output';
import { HashtagMaxAggregate } from './hashtag-max-aggregate.output';

@ObjectType()
export class HashtagGroupBy {
  @Field(() => Scalars.GraphQLUUID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  hashtag!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;

  @Field(() => HashtagCountAggregate, { nullable: true })
  _count?: HashtagCountAggregate;

  @Field(() => HashtagMinAggregate, { nullable: true })
  _min?: HashtagMinAggregate;

  @Field(() => HashtagMaxAggregate, { nullable: true })
  _max?: HashtagMaxAggregate;
}
