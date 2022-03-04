import { Field, InputType, HideField } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class UserScalarWhereInput {
  @Field(() => [UserScalarWhereInput], { nullable: true })
  AND?: Array<UserScalarWhereInput>;

  @Field(() => [UserScalarWhereInput], { nullable: true })
  OR?: Array<UserScalarWhereInput>;

  @Field(() => [UserScalarWhereInput], { nullable: true })
  NOT?: Array<UserScalarWhereInput>;

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

  @HideField()
  createdAt?: DateTimeFilter;

  @HideField()
  updatedAt?: DateTimeFilter;
}
