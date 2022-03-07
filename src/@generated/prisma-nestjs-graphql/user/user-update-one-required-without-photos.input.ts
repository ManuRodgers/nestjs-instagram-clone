import { Field, InputType } from '@nestjs/graphql';
import { UserCreateWithoutPhotosInput } from './user-create-without-photos.input';
import { UserCreateOrConnectWithoutPhotosInput } from './user-create-or-connect-without-photos.input';
import { UserUpsertWithoutPhotosInput } from './user-upsert-without-photos.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutPhotosInput } from './user-update-without-photos.input';

@InputType()
export class UserUpdateOneRequiredWithoutPhotosInput {
  @Field(() => UserCreateWithoutPhotosInput, { nullable: true })
  create?: UserCreateWithoutPhotosInput;

  @Field(() => UserCreateOrConnectWithoutPhotosInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutPhotosInput;

  @Field(() => UserUpsertWithoutPhotosInput, { nullable: true })
  upsert?: UserUpsertWithoutPhotosInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput;

  @Field(() => UserUpdateWithoutPhotosInput, { nullable: true })
  update?: UserUpdateWithoutPhotosInput;
}
