import { Field, InputType } from '@nestjs/graphql';
import { PhotoCreateWithoutUserInput } from './photo-create-without-user.input';
import { PhotoCreateOrConnectWithoutUserInput } from './photo-create-or-connect-without-user.input';
import { PhotoUpsertWithWhereUniqueWithoutUserInput } from './photo-upsert-with-where-unique-without-user.input';
import { PhotoCreateManyUserInputEnvelope } from './photo-create-many-user-input-envelope.input';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';
import { PhotoUpdateWithWhereUniqueWithoutUserInput } from './photo-update-with-where-unique-without-user.input';
import { PhotoUpdateManyWithWhereWithoutUserInput } from './photo-update-many-with-where-without-user.input';
import { PhotoScalarWhereInput } from './photo-scalar-where.input';

@InputType()
export class PhotoUncheckedUpdateManyWithoutUserInput {
  @Field(() => [PhotoCreateWithoutUserInput], { nullable: true })
  create?: Array<PhotoCreateWithoutUserInput>;

  @Field(() => [PhotoCreateOrConnectWithoutUserInput], { nullable: true })
  connectOrCreate?: Array<PhotoCreateOrConnectWithoutUserInput>;

  @Field(() => [PhotoUpsertWithWhereUniqueWithoutUserInput], { nullable: true })
  upsert?: Array<PhotoUpsertWithWhereUniqueWithoutUserInput>;

  @Field(() => PhotoCreateManyUserInputEnvelope, { nullable: true })
  createMany?: PhotoCreateManyUserInputEnvelope;

  @Field(() => [PhotoWhereUniqueInput], { nullable: true })
  set?: Array<PhotoWhereUniqueInput>;

  @Field(() => [PhotoWhereUniqueInput], { nullable: true })
  disconnect?: Array<PhotoWhereUniqueInput>;

  @Field(() => [PhotoWhereUniqueInput], { nullable: true })
  delete?: Array<PhotoWhereUniqueInput>;

  @Field(() => [PhotoWhereUniqueInput], { nullable: true })
  connect?: Array<PhotoWhereUniqueInput>;

  @Field(() => [PhotoUpdateWithWhereUniqueWithoutUserInput], { nullable: true })
  update?: Array<PhotoUpdateWithWhereUniqueWithoutUserInput>;

  @Field(() => [PhotoUpdateManyWithWhereWithoutUserInput], { nullable: true })
  updateMany?: Array<PhotoUpdateManyWithWhereWithoutUserInput>;

  @Field(() => [PhotoScalarWhereInput], { nullable: true })
  deleteMany?: Array<PhotoScalarWhereInput>;
}
