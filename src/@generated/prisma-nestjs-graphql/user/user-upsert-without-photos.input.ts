import { Field, InputType } from '@nestjs/graphql';
import { UserUpdateWithoutPhotosInput } from './user-update-without-photos.input';
import { UserCreateWithoutPhotosInput } from './user-create-without-photos.input';

@InputType()
export class UserUpsertWithoutPhotosInput {
  @Field(() => UserUpdateWithoutPhotosInput, { nullable: false })
  update!: UserUpdateWithoutPhotosInput;

  @Field(() => UserCreateWithoutPhotosInput, { nullable: false })
  create!: UserCreateWithoutPhotosInput;
}
