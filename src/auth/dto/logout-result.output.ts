import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LogoutResult {
  @Field(() => Boolean, { nullable: false })
  ok!: boolean;
}
