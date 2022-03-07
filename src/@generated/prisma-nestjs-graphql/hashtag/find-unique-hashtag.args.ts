import { Field, ArgsType } from '@nestjs/graphql';
import { HashtagWhereUniqueInput } from './hashtag-where-unique.input';

@ArgsType()
export class FindUniqueHashtagArgs {
  @Field(() => HashtagWhereUniqueInput, { nullable: false })
  where!: HashtagWhereUniqueInput;
}
