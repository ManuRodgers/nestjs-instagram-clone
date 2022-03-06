import { Field, InputType, Int } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';

@InputType()
export class SearchUserInput {
  @Field(() => String, { nullable: false })
  keyword!: string;

  @Field(() => Int, { nullable: true, defaultValue: 5 })
  pageSize?: number;

  @Field(() => GraphQLUUID, { nullable: true })
  currentCursor?: string;
}
