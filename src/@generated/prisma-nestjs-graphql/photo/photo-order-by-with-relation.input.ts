import { Field, InputType, HideField } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { HashtagOrderByRelationAggregateInput } from '../hashtag/hashtag-order-by-relation-aggregate.input';

@InputType()
export class PhotoOrderByWithRelationInput {
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

  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  user?: UserOrderByWithRelationInput;

  @Field(() => HashtagOrderByRelationAggregateInput, { nullable: true })
  hashtags?: HashtagOrderByRelationAggregateInput;

  @HideField()
  createdAt?: keyof typeof SortOrder;

  @HideField()
  updatedAt?: keyof typeof SortOrder;
}
