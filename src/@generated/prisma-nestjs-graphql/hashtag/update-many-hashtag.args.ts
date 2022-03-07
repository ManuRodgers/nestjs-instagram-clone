import { Field, ArgsType } from '@nestjs/graphql';
import { HashtagUpdateManyMutationInput } from './hashtag-update-many-mutation.input';
import { HashtagWhereInput } from './hashtag-where.input';

@ArgsType()
export class UpdateManyHashtagArgs {
  @Field(() => HashtagUpdateManyMutationInput, { nullable: false })
  data!: HashtagUpdateManyMutationInput;

  @Field(() => HashtagWhereInput, { nullable: true })
  where?: HashtagWhereInput;
}
