import { Field, InputType } from '@nestjs/graphql';
import { HashtagWhereUniqueInput } from './hashtag-where-unique.input';
import { HashtagUpdateWithoutPhotosInput } from './hashtag-update-without-photos.input';
import { HashtagCreateWithoutPhotosInput } from './hashtag-create-without-photos.input';

@InputType()
export class HashtagUpsertWithWhereUniqueWithoutPhotosInput {
  @Field(() => HashtagWhereUniqueInput, { nullable: false })
  where!: HashtagWhereUniqueInput;

  @Field(() => HashtagUpdateWithoutPhotosInput, { nullable: false })
  update!: HashtagUpdateWithoutPhotosInput;

  @Field(() => HashtagCreateWithoutPhotosInput, { nullable: false })
  create!: HashtagCreateWithoutPhotosInput;
}
