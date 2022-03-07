import { Field, InputType } from '@nestjs/graphql';
import { PhotoCreateWithoutHashtagsInput } from './photo-create-without-hashtags.input';
import { PhotoCreateOrConnectWithoutHashtagsInput } from './photo-create-or-connect-without-hashtags.input';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';

@InputType()
export class PhotoCreateNestedManyWithoutHashtagsInput {
  @Field(() => [PhotoCreateWithoutHashtagsInput], { nullable: true })
  create?: Array<PhotoCreateWithoutHashtagsInput>;

  @Field(() => [PhotoCreateOrConnectWithoutHashtagsInput], { nullable: true })
  connectOrCreate?: Array<PhotoCreateOrConnectWithoutHashtagsInput>;

  @Field(() => [PhotoWhereUniqueInput], { nullable: true })
  connect?: Array<PhotoWhereUniqueInput>;
}
