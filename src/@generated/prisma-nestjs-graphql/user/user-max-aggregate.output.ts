import { Field, ObjectType, HideField } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';

@ObjectType()
export class UserMaxAggregate {
  @Field(() => Scalars.GraphQLUUID, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => String, { nullable: true })
  firstName?: string;

  @Field(() => String, { nullable: true })
  lastName?: string;

  @Field(() => String, { nullable: true })
  username?: string;

  @Field(() => Scalars.GraphQLEmailAddress, { nullable: true })
  email?: string;

  @HideField()
  password?: string;
}
