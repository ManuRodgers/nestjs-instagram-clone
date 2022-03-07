import { Field, ArgsType } from '@nestjs/graphql';
import { HashtagUpdateInput } from './hashtag-update.input';
import { HashtagWhereUniqueInput } from './hashtag-where-unique.input';

@ArgsType()
export class UpdateOneHashtagArgs {
  @Field(() => HashtagUpdateInput, { nullable: false })
  data!: HashtagUpdateInput;

  @Field(() => HashtagWhereUniqueInput, { nullable: false })
  where!: HashtagWhereUniqueInput;
}
