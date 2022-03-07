import { Field, InputType } from '@nestjs/graphql';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';
import { PhotoCreateWithoutHashtagsInput } from './photo-create-without-hashtags.input';

@InputType()
export class PhotoCreateOrConnectWithoutHashtagsInput {
  @Field(() => PhotoWhereUniqueInput, { nullable: false })
  where!: PhotoWhereUniqueInput;

  @Field(() => PhotoCreateWithoutHashtagsInput, { nullable: false })
  create!: PhotoCreateWithoutHashtagsInput;
}
