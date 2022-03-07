import { Field, InputType } from '@nestjs/graphql';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';
import { PhotoUpdateWithoutHashtagsInput } from './photo-update-without-hashtags.input';

@InputType()
export class PhotoUpdateWithWhereUniqueWithoutHashtagsInput {
  @Field(() => PhotoWhereUniqueInput, { nullable: false })
  where!: PhotoWhereUniqueInput;

  @Field(() => PhotoUpdateWithoutHashtagsInput, { nullable: false })
  data!: PhotoUpdateWithoutHashtagsInput;
}
