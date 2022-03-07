import { Field, InputType, HideField } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PhotoOrderByRelationAggregateInput } from '../photo/photo-order-by-relation-aggregate.input';

@InputType()
export class HashtagOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  hashtag?: keyof typeof SortOrder;

  @Field(() => PhotoOrderByRelationAggregateInput, { nullable: true })
  photos?: PhotoOrderByRelationAggregateInput;

  @HideField()
  createdAt?: keyof typeof SortOrder;

  @HideField()
  updatedAt?: keyof typeof SortOrder;
}
