import { Field, InputType } from '@nestjs/graphql';
import { PhotoCreateWithoutUserInput } from './photo-create-without-user.input';
import { PhotoCreateOrConnectWithoutUserInput } from './photo-create-or-connect-without-user.input';
import { PhotoCreateManyUserInputEnvelope } from './photo-create-many-user-input-envelope.input';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';

@InputType()
export class PhotoCreateNestedManyWithoutUserInput {
  @Field(() => [PhotoCreateWithoutUserInput], { nullable: true })
  create?: Array<PhotoCreateWithoutUserInput>;

  @Field(() => [PhotoCreateOrConnectWithoutUserInput], { nullable: true })
  connectOrCreate?: Array<PhotoCreateOrConnectWithoutUserInput>;

  @Field(() => PhotoCreateManyUserInputEnvelope, { nullable: true })
  createMany?: PhotoCreateManyUserInputEnvelope;

  @Field(() => [PhotoWhereUniqueInput], { nullable: true })
  connect?: Array<PhotoWhereUniqueInput>;
}
