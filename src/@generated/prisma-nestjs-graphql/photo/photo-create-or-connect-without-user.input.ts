import { Field, InputType } from '@nestjs/graphql';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';
import { PhotoCreateWithoutUserInput } from './photo-create-without-user.input';

@InputType()
export class PhotoCreateOrConnectWithoutUserInput {
  @Field(() => PhotoWhereUniqueInput, { nullable: false })
  where!: PhotoWhereUniqueInput;

  @Field(() => PhotoCreateWithoutUserInput, { nullable: false })
  create!: PhotoCreateWithoutUserInput;
}
