import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class SeeProfileUserArgs {
  @Field(() => String, { nullable: false })
  username!: string;
}
