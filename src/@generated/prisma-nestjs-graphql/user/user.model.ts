import { Field, ObjectType, HideField } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';

@ObjectType()
export class User {
  @Field(() => Scalars.GraphQLUUID, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => String, { nullable: false })
  firstName!: string;

  @Field(() => String, { nullable: true })
  lastName!: string | null;

  @Field(() => String, { nullable: false })
  username!: string;

  @Field(() => Scalars.GraphQLEmailAddress, { nullable: false })
  email!: string;

  @HideField()
  password!: string;
}
