import { Field, InputType } from '@nestjs/graphql';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';
import { PhotoUpdateWithoutUserInput } from './photo-update-without-user.input';

@InputType()
export class PhotoUpdateWithWhereUniqueWithoutUserInput {
  @Field(() => PhotoWhereUniqueInput, { nullable: false })
  where!: PhotoWhereUniqueInput;

  @Field(() => PhotoUpdateWithoutUserInput, { nullable: false })
  data!: PhotoUpdateWithoutUserInput;
}
