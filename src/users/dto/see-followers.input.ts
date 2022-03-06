import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class SeeFollowersInput {
  @Field(() => String, { nullable: false })
  username!: string;

  @Field(() => Int, { nullable: false })
  pageNum!: number;

  @Field(() => Int, { nullable: true, defaultValue: 5 })
  pageSize?: number;
}
