import { Field, ArgsType } from '@nestjs/graphql';
import { HashtagWhereInput } from './hashtag-where.input';

@ArgsType()
export class DeleteManyHashtagArgs {
  @Field(() => HashtagWhereInput, { nullable: true })
  where?: HashtagWhereInput;
}
