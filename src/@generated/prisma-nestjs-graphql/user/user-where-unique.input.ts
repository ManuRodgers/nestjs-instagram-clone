import { Field, InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';

@InputType()
export class UserWhereUniqueInput {
  @Field(() => Scalars.GraphQLUUID, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  username?: string;

  @Field(() => Scalars.GraphQLEmailAddress, { nullable: true })
  @Validator.IsEmail()
  email?: string;
}
