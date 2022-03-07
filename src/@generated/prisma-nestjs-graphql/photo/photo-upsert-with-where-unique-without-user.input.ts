import { Field, InputType } from '@nestjs/graphql';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';
import { PhotoUpdateWithoutUserInput } from './photo-update-without-user.input';
import { PhotoCreateWithoutUserInput } from './photo-create-without-user.input';

@InputType()
export class PhotoUpsertWithWhereUniqueWithoutUserInput {
  @Field(() => PhotoWhereUniqueInput, { nullable: false })
  where!: PhotoWhereUniqueInput;

  @Field(() => PhotoUpdateWithoutUserInput, { nullable: false })
  update!: PhotoUpdateWithoutUserInput;

  @Field(() => PhotoCreateWithoutUserInput, { nullable: false })
  create!: PhotoCreateWithoutUserInput;
}
