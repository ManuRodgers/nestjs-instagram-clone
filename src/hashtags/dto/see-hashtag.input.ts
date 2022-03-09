import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SeeHashtagInput {
  @Field(() => String, { nullable: false })
  hashtag!: string;
}
