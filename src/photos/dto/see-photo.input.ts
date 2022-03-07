import { Field, InputType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';

@InputType()
export class SeePhotoInput {
  @Field(() => GraphQLUUID, { nullable: false })
  id!: string;
}
