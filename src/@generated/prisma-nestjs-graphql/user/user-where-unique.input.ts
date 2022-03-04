import { Field, InputType, HideField } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';

@InputType()
export class UserWhereUniqueInput {
  @HideField()
  id?: string;

  @Field(() => String, { nullable: true })
  username?: string;

  @Field(() => Scalars.GraphQLEmailAddress, { nullable: true })
  email?: string;
}
