import { Field, InputType, HideField } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class PhotoScalarWhereWithAggregatesInput {
  @Field(() => [PhotoScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<PhotoScalarWhereWithAggregatesInput>;

  @Field(() => [PhotoScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<PhotoScalarWhereWithAggregatesInput>;

  @Field(() => [PhotoScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<PhotoScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  file?: StringNullableWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  photoOutputUrl?: StringNullableWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  caption?: StringNullableWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  userId?: StringWithAggregatesFilter;

  @HideField()
  createdAt?: DateTimeWithAggregatesFilter;

  @HideField()
  updatedAt?: DateTimeWithAggregatesFilter;
}
