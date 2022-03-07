import { Field, ArgsType, Int } from '@nestjs/graphql';
import { HashtagWhereInput } from './hashtag-where.input';
import { HashtagOrderByWithAggregationInput } from './hashtag-order-by-with-aggregation.input';
import { HashtagScalarFieldEnum } from './hashtag-scalar-field.enum';
import { HashtagScalarWhereWithAggregatesInput } from './hashtag-scalar-where-with-aggregates.input';
import { HashtagCountAggregateInput } from './hashtag-count-aggregate.input';
import { HashtagMinAggregateInput } from './hashtag-min-aggregate.input';
import { HashtagMaxAggregateInput } from './hashtag-max-aggregate.input';

@ArgsType()
export class HashtagGroupByArgs {
  @Field(() => HashtagWhereInput, { nullable: true })
  where?: HashtagWhereInput;

  @Field(() => [HashtagOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<HashtagOrderByWithAggregationInput>;

  @Field(() => [HashtagScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof HashtagScalarFieldEnum>;

  @Field(() => HashtagScalarWhereWithAggregatesInput, { nullable: true })
  having?: HashtagScalarWhereWithAggregatesInput;

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
