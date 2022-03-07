import { Field, InputType, HideField } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { PhotoListRelationFilter } from '../photo/photo-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class HashtagWhereInput {
  @Field(() => [HashtagWhereInput], { nullable: true })
  AND?: Array<HashtagWhereInput>;

  @Field(() => [HashtagWhereInput], { nullable: true })
  OR?: Array<HashtagWhereInput>;

  @Field(() => [HashtagWhereInput], { nullable: true })
  NOT?: Array<HashtagWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  hashtag?: StringFilter;

  @Field(() => PhotoListRelationFilter, { nullable: true })
  photos?: PhotoListRelationFilter;

  @HideField()
  createdAt?: DateTimeFilter;

  @HideField()
  updatedAt?: DateTimeFilter;
}
