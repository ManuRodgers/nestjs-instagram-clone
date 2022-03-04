import { Field, InputType, HideField } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class UserScalarWhereWithAggregatesInput {
  @Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<UserScalarWhereWithAggregatesInput>;

  @Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<UserScalarWhereWithAggregatesInput>;

  @Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<UserScalarWhereWithAggregatesInput>;

  @HideField()
  id?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  firstName?: StringWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  lastName?: StringNullableWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  username?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  email?: StringWithAggregatesFilter;

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  isEmailVerified?: BoolWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  password?: StringWithAggregatesFilter;

  @HideField()
  refreshToken?: StringNullableWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  bio?: StringNullableWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  avatar?: StringNullableWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  avatarOutputUrl?: StringNullableWithAggregatesFilter;

  @HideField()
  createdAt?: DateTimeWithAggregatesFilter;

  @HideField()
  updatedAt?: DateTimeWithAggregatesFilter;
}
