import { Field, ObjectType, Int, HideField } from '@nestjs/graphql';

@ObjectType()
export class UserCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  createdAt!: number;

  @Field(() => Int, { nullable: false })
  updatedAt!: number;

  @Field(() => Int, { nullable: false })
  firstName!: number;

  @Field(() => Int, { nullable: false })
  lastName!: number;

  @Field(() => Int, { nullable: false })
  username!: number;

  @Field(() => Int, { nullable: false })
  email!: number;

  @HideField()
  password!: number;

  @Field(() => Int, { nullable: false })
  refreshToken!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
