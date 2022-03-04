import { Field, InputType, HideField } from '@nestjs/graphql';

@InputType()
export class UserMaxAggregateInput {
  @HideField()
  id?: true;

  @Field(() => Boolean, { nullable: true })
  firstName?: true;

  @Field(() => Boolean, { nullable: true })
  lastName?: true;

  @Field(() => Boolean, { nullable: true })
  username?: true;

  @Field(() => Boolean, { nullable: true })
  email?: true;

  @Field(() => Boolean, { nullable: true })
  isEmailVerified?: true;

  @Field(() => Boolean, { nullable: true })
  password?: true;

  @HideField()
  refreshToken?: true;

  @Field(() => Boolean, { nullable: true })
  bio?: true;

  @Field(() => Boolean, { nullable: true })
  avatar?: true;

  @Field(() => Boolean, { nullable: true })
  avatarOutputUrl?: true;

  @HideField()
  createdAt?: true;

  @HideField()
  updatedAt?: true;
}
