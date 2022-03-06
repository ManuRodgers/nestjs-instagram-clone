import { Field, InputType, Int } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';

@InputType()
export class SeeFollowingInput {
  @Field(() => String, { nullable: false })
  username!: string;

  @Field(() => GraphQLUUID, { nullable: true })
  currentCursor?: string;

  @Field(() => Int, { nullable: true, defaultValue: 5 })
  pageSize?: number;
}
