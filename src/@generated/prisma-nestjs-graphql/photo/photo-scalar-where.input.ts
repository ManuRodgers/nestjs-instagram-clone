import { Field, InputType, HideField } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PhotoScalarWhereInput {
  @Field(() => [PhotoScalarWhereInput], { nullable: true })
  AND?: Array<PhotoScalarWhereInput>;

  @Field(() => [PhotoScalarWhereInput], { nullable: true })
  OR?: Array<PhotoScalarWhereInput>;

  @Field(() => [PhotoScalarWhereInput], { nullable: true })
  NOT?: Array<PhotoScalarWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  file?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  photoOutputUrl?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  caption?: StringNullableFilter;

  @Field(() => StringFilter, { nullable: true })
  userId?: StringFilter;

  @HideField()
  createdAt?: DateTimeFilter;

  @HideField()
  updatedAt?: DateTimeFilter;
}
