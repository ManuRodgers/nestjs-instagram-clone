import { Field, InputType } from '@nestjs/graphql';
import { PhotoCreateWithoutHashtagsInput } from './photo-create-without-hashtags.input';
import { PhotoCreateOrConnectWithoutHashtagsInput } from './photo-create-or-connect-without-hashtags.input';
import { PhotoUpsertWithWhereUniqueWithoutHashtagsInput } from './photo-upsert-with-where-unique-without-hashtags.input';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';
import { PhotoUpdateWithWhereUniqueWithoutHashtagsInput } from './photo-update-with-where-unique-without-hashtags.input';
import { PhotoUpdateManyWithWhereWithoutHashtagsInput } from './photo-update-many-with-where-without-hashtags.input';
import { PhotoScalarWhereInput } from './photo-scalar-where.input';

@InputType()
export class PhotoUpdateManyWithoutHashtagsInput {
  @Field(() => [PhotoCreateWithoutHashtagsInput], { nullable: true })
  create?: Array<PhotoCreateWithoutHashtagsInput>;

  @Field(() => [PhotoCreateOrConnectWithoutHashtagsInput], { nullable: true })
  connectOrCreate?: Array<PhotoCreateOrConnectWithoutHashtagsInput>;

  @Field(() => [PhotoUpsertWithWhereUniqueWithoutHashtagsInput], {
    nullable: true,
  })
  upsert?: Array<PhotoUpsertWithWhereUniqueWithoutHashtagsInput>;

  @Field(() => [PhotoWhereUniqueInput], { nullable: true })
  set?: Array<PhotoWhereUniqueInput>;

  @Field(() => [PhotoWhereUniqueInput], { nullable: true })
  disconnect?: Array<PhotoWhereUniqueInput>;

  @Field(() => [PhotoWhereUniqueInput], { nullable: true })
  delete?: Array<PhotoWhereUniqueInput>;

  @Field(() => [PhotoWhereUniqueInput], { nullable: true })
  connect?: Array<PhotoWhereUniqueInput>;

  @Field(() => [PhotoUpdateWithWhereUniqueWithoutHashtagsInput], {
    nullable: true,
  })
  update?: Array<PhotoUpdateWithWhereUniqueWithoutHashtagsInput>;

  @Field(() => [PhotoUpdateManyWithWhereWithoutHashtagsInput], {
    nullable: true,
  })
  updateMany?: Array<PhotoUpdateManyWithWhereWithoutHashtagsInput>;

  @Field(() => [PhotoScalarWhereInput], { nullable: true })
  deleteMany?: Array<PhotoScalarWhereInput>;
}
