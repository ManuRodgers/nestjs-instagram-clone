import { Field, InputType } from '@nestjs/graphql';
import { UserCreateWithoutPhotosInput } from './user-create-without-photos.input';
import { UserCreateOrConnectWithoutPhotosInput } from './user-create-or-connect-without-photos.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutPhotosInput {
  @Field(() => UserCreateWithoutPhotosInput, { nullable: true })
  create?: UserCreateWithoutPhotosInput;

  @Field(() => UserCreateOrConnectWithoutPhotosInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutPhotosInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput;
}
