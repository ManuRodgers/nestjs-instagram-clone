import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FollowUserInput {
  @Field(() => String, { nullable: false })
  username!: string;
}
