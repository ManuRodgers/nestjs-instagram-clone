import { Field, InputType, HideField } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByRelationAggregateInput } from './user-order-by-relation-aggregate.input';
import { PhotoOrderByRelationAggregateInput } from '../photo/photo-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {
  @HideField()
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  firstName?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  lastName?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  username?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  isEmailVerified?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;

  @HideField()
  refreshToken?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  bio?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  avatar?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  avatarOutputUrl?: keyof typeof SortOrder;

  @HideField()
  following?: UserOrderByRelationAggregateInput;

  @HideField()
  followers?: UserOrderByRelationAggregateInput;

  @Field(() => PhotoOrderByRelationAggregateInput, { nullable: true })
  photos?: PhotoOrderByRelationAggregateInput;

  @HideField()
  createdAt?: keyof typeof SortOrder;

  @HideField()
  updatedAt?: keyof typeof SortOrder;
}
