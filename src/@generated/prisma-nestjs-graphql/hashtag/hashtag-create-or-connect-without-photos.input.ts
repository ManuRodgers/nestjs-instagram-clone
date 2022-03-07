import { Field, InputType } from '@nestjs/graphql';
import { HashtagWhereUniqueInput } from './hashtag-where-unique.input';
import { HashtagCreateWithoutPhotosInput } from './hashtag-create-without-photos.input';

@InputType()
export class HashtagCreateOrConnectWithoutPhotosInput {
  @Field(() => HashtagWhereUniqueInput, { nullable: false })
  where!: HashtagWhereUniqueInput;

  @Field(() => HashtagCreateWithoutPhotosInput, { nullable: false })
  create!: HashtagCreateWithoutPhotosInput;
}
