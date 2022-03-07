import { Field, ArgsType, Int } from '@nestjs/graphql';
import { HashtagWhereInput } from './hashtag-where.input';
import { HashtagOrderByWithRelationInput } from './hashtag-order-by-with-relation.input';
import { HashtagWhereUniqueInput } from './hashtag-where-unique.input';
import { HashtagCountAggregateInput } from './hashtag-count-aggregate.input';
import { HashtagMinAggregateInput } from './hashtag-min-aggregate.input';
import { HashtagMaxAggregateInput } from './hashtag-max-aggregate.input';

@ArgsType()
export class HashtagAggregateArgs {
  @Field(() => HashtagWhereInput, { nullable: true })
  where?: HashtagWhereInput;

  @Field(() => [HashtagOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<HashtagOrderByWithRelationInput>;

  @Field(() => HashtagWhereUniqueInput, { nullable: true })
  cursor?: HashtagWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => HashtagCountAggregateInput, { nullable: true })
  _count?: HashtagCountAggregateInput;

  @Field(() => HashtagMinAggregateInput, { nullable: true })
  _min?: HashtagMinAggregateInput;

  @Field(() => HashtagMaxAggregateInput, { nullable: true })
  _max?: HashtagMaxAggregateInput;
}
