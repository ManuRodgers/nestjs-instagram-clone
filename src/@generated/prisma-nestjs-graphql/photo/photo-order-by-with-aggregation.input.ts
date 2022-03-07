import { Field, InputType, HideField } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PhotoCountOrderByAggregateInput } from './photo-count-order-by-aggregate.input';
import { PhotoMaxOrderByAggregateInput } from './photo-max-order-by-aggregate.input';
import { PhotoMinOrderByAggregateInput } from './photo-min-order-by-aggregate.input';

@InputType()
export class PhotoOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  file?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  photoOutputUrl?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  caption?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;

  @HideField()
  createdAt?: keyof typeof SortOrder;

  @HideField()
  updatedAt?: keyof typeof SortOrder;

  @Field(() => PhotoCountOrderByAggregateInput, { nullable: true })
  _count?: PhotoCountOrderByAggregateInput;

  @Field(() => PhotoMaxOrderByAggregateInput, { nullable: true })
  _max?: PhotoMaxOrderByAggregateInput;

  @Field(() => PhotoMinOrderByAggregateInput, { nullable: true })
  _min?: PhotoMinOrderByAggregateInput;
}
