import { Field, InputType } from '@nestjs/graphql';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';
import { PhotoUpdateWithoutHashtagsInput } from './photo-update-without-hashtags.input';
import { PhotoCreateWithoutHashtagsInput } from './photo-create-without-hashtags.input';

@InputType()
export class PhotoUpsertWithWhereUniqueWithoutHashtagsInput {
  @Field(() => PhotoWhereUniqueInput, { nullable: false })
  where!: PhotoWhereUniqueInput;

  @Field(() => PhotoUpdateWithoutHashtagsInput, { nullable: false })
  update!: PhotoUpdateWithoutHashtagsInput;

  @Field(() => PhotoCreateWithoutHashtagsInput, { nullable: false })
  create!: PhotoCreateWithoutHashtagsInput;
}
