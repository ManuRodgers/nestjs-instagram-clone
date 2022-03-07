import { Field, InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutPhotosInput } from './user-create-without-photos.input';

@InputType()
export class UserCreateOrConnectWithoutPhotosInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  where!: UserWhereUniqueInput;

  @Field(() => UserCreateWithoutPhotosInput, { nullable: false })
  create!: UserCreateWithoutPhotosInput;
}
