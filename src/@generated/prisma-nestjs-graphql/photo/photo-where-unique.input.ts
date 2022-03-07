import { Field, InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';

@InputType()
export class PhotoWhereUniqueInput {
  @Field(() => Scalars.GraphQLUUID, { nullable: true })
  id?: string;
}
