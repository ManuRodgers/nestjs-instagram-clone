import { Field, ArgsType } from '@nestjs/graphql';
import { HashtagWhereUniqueInput } from './hashtag-where-unique.input';
import { HashtagCreateInput } from './hashtag-create.input';
import { HashtagUpdateInput } from './hashtag-update.input';

@ArgsType()
export class UpsertOneHashtagArgs {
  @Field(() => HashtagWhereUniqueInput, { nullable: false })
  where!: HashtagWhereUniqueInput;

  @Field(() => HashtagCreateInput, { nullable: false })
  create!: HashtagCreateInput;

  @Field(() => HashtagUpdateInput, { nullable: false })
  update!: HashtagUpdateInput;
}
