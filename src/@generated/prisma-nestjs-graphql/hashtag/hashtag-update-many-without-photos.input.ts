import { Field, InputType } from '@nestjs/graphql';
import { HashtagCreateWithoutPhotosInput } from './hashtag-create-without-photos.input';
import { HashtagCreateOrConnectWithoutPhotosInput } from './hashtag-create-or-connect-without-photos.input';
import { HashtagUpsertWithWhereUniqueWithoutPhotosInput } from './hashtag-upsert-with-where-unique-without-photos.input';
import { HashtagWhereUniqueInput } from './hashtag-where-unique.input';
import { HashtagUpdateWithWhereUniqueWithoutPhotosInput } from './hashtag-update-with-where-unique-without-photos.input';
import { HashtagUpdateManyWithWhereWithoutPhotosInput } from './hashtag-update-many-with-where-without-photos.input';
import { HashtagScalarWhereInput } from './hashtag-scalar-where.input';

@InputType()
export class HashtagUpdateManyWithoutPhotosInput {
  @Field(() => [HashtagCreateWithoutPhotosInput], { nullable: true })
  create?: Array<HashtagCreateWithoutPhotosInput>;

  @Field(() => [HashtagCreateOrConnectWithoutPhotosInput], { nullable: true })
  connectOrCreate?: Array<HashtagCreateOrConnectWithoutPhotosInput>;

  @Field(() => [HashtagUpsertWithWhereUniqueWithoutPhotosInput], {
    nullable: true,
  })
  upsert?: Array<HashtagUpsertWithWhereUniqueWithoutPhotosInput>;

  @Field(() => [HashtagWhereUniqueInput], { nullable: true })
  set?: Array<HashtagWhereUniqueInput>;

  @Field(() => [HashtagWhereUniqueInput], { nullable: true })
  disconnect?: Array<HashtagWhereUniqueInput>;

  @Field(() => [HashtagWhereUniqueInput], { nullable: true })
  delete?: Array<HashtagWhereUniqueInput>;

  @Field(() => [HashtagWhereUniqueInput], { nullable: true })
  connect?: Array<HashtagWhereUniqueInput>;

  @Field(() => [HashtagUpdateWithWhereUniqueWithoutPhotosInput], {
    nullable: true,
  })
  update?: Array<HashtagUpdateWithWhereUniqueWithoutPhotosInput>;

  @Field(() => [HashtagUpdateManyWithWhereWithoutPhotosInput], {
    nullable: true,
  })
  updateMany?: Array<HashtagUpdateManyWithWhereWithoutPhotosInput>;

  @Field(() => [HashtagScalarWhereInput], { nullable: true })
  deleteMany?: Array<HashtagScalarWhereInput>;
}
