import { Field, ArgsType } from '@nestjs/graphql';
import { PhotoUpdateInput } from './photo-update.input';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';

@ArgsType()
export class UpdateOnePhotoArgs {
  @Field(() => PhotoUpdateInput, { nullable: false })
  data!: PhotoUpdateInput;

  @Field(() => PhotoWhereUniqueInput, { nullable: false })
  where!: PhotoWhereUniqueInput;
}
