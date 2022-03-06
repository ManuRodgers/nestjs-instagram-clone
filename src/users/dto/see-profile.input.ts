import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SeeProfileInput {
  @Field(() => String, { nullable: false })
  username!: string;
}
