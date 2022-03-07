import { Field, ArgsType } from '@nestjs/graphql';
import { HashtagCreateInput } from './hashtag-create.input';

@ArgsType()
export class CreateOneHashtagArgs {
  @Field(() => HashtagCreateInput, { nullable: false })
  data!: HashtagCreateInput;
}
