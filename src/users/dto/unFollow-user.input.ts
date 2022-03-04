import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UnFollowUserInput {
  @Field(() => String, { nullable: false })
  username!: string;
}
