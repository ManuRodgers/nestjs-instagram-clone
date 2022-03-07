import { Field, InputType, HideField } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HashtagCountOrderByAggregateInput } from './hashtag-count-order-by-aggregate.input';
import { HashtagMaxOrderByAggregateInput } from './hashtag-max-order-by-aggregate.input';
import { HashtagMinOrderByAggregateInput } from './hashtag-min-order-by-aggregate.input';

@InputType()
export class HashtagOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  hashtag?: keyof typeof SortOrder;

  @HideField()
  createdAt?: keyof typeof SortOrder;

  @HideField()
  updatedAt?: keyof typeof SortOrder;

  @Field(() => HashtagCountOrderByAggregateInput, { nullable: true })
  _count?: HashtagCountOrderByAggregateInput;

  @Field(() => HashtagMaxOrderByAggregateInput, { nullable: true })
  _max?: HashtagMaxOrderByAggregateInput;

  @Field(() => HashtagMinOrderByAggregateInput, { nullable: true })
  _min?: HashtagMinOrderByAggregateInput;
}
