import { Field, InputType, HideField } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class HashtagScalarWhereWithAggregatesInput {
  @Field(() => [HashtagScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<HashtagScalarWhereWithAggregatesInput>;

  @Field(() => [HashtagScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<HashtagScalarWhereWithAggregatesInput>;

  @Field(() => [HashtagScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<HashtagScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  hashtag?: StringWithAggregatesFilter;

  @HideField()
  createdAt?: DateTimeWithAggregatesFilter;

  @HideField()
  updatedAt?: DateTimeWithAggregatesFilter;
}
