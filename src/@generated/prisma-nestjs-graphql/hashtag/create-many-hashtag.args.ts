import { Field, ArgsType } from '@nestjs/graphql';
import { HashtagCreateManyInput } from './hashtag-create-many.input';

@ArgsType()
export class CreateManyHashtagArgs {
  @Field(() => [HashtagCreateManyInput], { nullable: false })
  data!: Array<HashtagCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
