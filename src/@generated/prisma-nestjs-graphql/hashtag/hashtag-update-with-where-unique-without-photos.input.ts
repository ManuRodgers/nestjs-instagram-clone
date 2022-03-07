import { Field, InputType } from '@nestjs/graphql';
import { HashtagWhereUniqueInput } from './hashtag-where-unique.input';
import { HashtagUpdateWithoutPhotosInput } from './hashtag-update-without-photos.input';

@InputType()
export class HashtagUpdateWithWhereUniqueWithoutPhotosInput {
  @Field(() => HashtagWhereUniqueInput, { nullable: false })
  where!: HashtagWhereUniqueInput;

  @Field(() => HashtagUpdateWithoutPhotosInput, { nullable: false })
  data!: HashtagUpdateWithoutPhotosInput;
}
