import { Field, InputType, HideField } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { HashtagListRelationFilter } from '../hashtag/hashtag-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PhotoWhereInput {
  @Field(() => [PhotoWhereInput], { nullable: true })
  AND?: Array<PhotoWhereInput>;

  @Field(() => [PhotoWhereInput], { nullable: true })
  OR?: Array<PhotoWhereInput>;

  @Field(() => [PhotoWhereInput], { nullable: true })
  NOT?: Array<PhotoWhereInput>;

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

  @Field(() => UserRelationFilter, { nullable: true })
  user?: UserRelationFilter;

  @Field(() => HashtagListRelationFilter, { nullable: true })
  hashtags?: HashtagListRelationFilter;

  @HideField()
  createdAt?: DateTimeFilter;

  @HideField()
  updatedAt?: DateTimeFilter;
}
