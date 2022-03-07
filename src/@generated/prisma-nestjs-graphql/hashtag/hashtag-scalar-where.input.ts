import { Field, InputType, HideField } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class HashtagScalarWhereInput {
  @Field(() => [HashtagScalarWhereInput], { nullable: true })
  AND?: Array<HashtagScalarWhereInput>;

  @Field(() => [HashtagScalarWhereInput], { nullable: true })
  OR?: Array<HashtagScalarWhereInput>;

  @Field(() => [HashtagScalarWhereInput], { nullable: true })
  NOT?: Array<HashtagScalarWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  hashtag?: StringFilter;

  @HideField()
  createdAt?: DateTimeFilter;

  @HideField()
  updatedAt?: DateTimeFilter;
}
