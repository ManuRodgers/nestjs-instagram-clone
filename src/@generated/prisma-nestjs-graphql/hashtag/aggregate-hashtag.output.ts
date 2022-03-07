import { Field, ObjectType } from '@nestjs/graphql';
import { HashtagCountAggregate } from './hashtag-count-aggregate.output';
import { HashtagMinAggregate } from './hashtag-min-aggregate.output';
import { HashtagMaxAggregate } from './hashtag-max-aggregate.output';

@ObjectType()
export class AggregateHashtag {
  @Field(() => HashtagCountAggregate, { nullable: true })
  _count?: HashtagCountAggregate;

  @Field(() => HashtagMinAggregate, { nullable: true })
  _min?: HashtagMinAggregate;

  @Field(() => HashtagMaxAggregate, { nullable: true })
  _max?: HashtagMaxAggregate;
}
