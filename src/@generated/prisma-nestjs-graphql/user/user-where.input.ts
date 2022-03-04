import { Field, InputType, HideField } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { UserListRelationFilter } from './user-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class UserWhereInput {
  @Field(() => [UserWhereInput], { nullable: true })
  AND?: Array<UserWhereInput>;

  @Field(() => [UserWhereInput], { nullable: true })
  OR?: Array<UserWhereInput>;

  @Field(() => [UserWhereInput], { nullable: true })
  NOT?: Array<UserWhereInput>;

  @HideField()
  id?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  firstName?: StringFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  lastName?: StringNullableFilter;

  @Field(() => StringFilter, { nullable: true })
  username?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  email?: StringFilter;

  @Field(() => BoolFilter, { nullable: true })
  isEmailVerified?: BoolFilter;

  @Field(() => StringFilter, { nullable: true })
  password?: StringFilter;

  @HideField()
  refreshToken?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  bio?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  avatar?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  avatarOutputUrl?: StringNullableFilter;

  @Field(() => UserListRelationFilter, { nullable: true })
  following?: UserListRelationFilter;

  @Field(() => UserListRelationFilter, { nullable: true })
  followers?: UserListRelationFilter;

  @HideField()
  createdAt?: DateTimeFilter;

  @HideField()
  updatedAt?: DateTimeFilter;
}
