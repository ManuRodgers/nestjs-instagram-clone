import { Field, ArgsType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';

@ArgsType()
export class FindUniqueUserArgs {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  where!: UserWhereUniqueInput;
}
