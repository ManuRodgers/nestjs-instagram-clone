import { Field, ArgsType } from '@nestjs/graphql';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';
import { PhotoCreateInput } from './photo-create.input';
import { PhotoUpdateInput } from './photo-update.input';

@ArgsType()
export class UpsertOnePhotoArgs {
  @Field(() => PhotoWhereUniqueInput, { nullable: false })
  where!: PhotoWhereUniqueInput;

  @Field(() => PhotoCreateInput, { nullable: false })
  create!: PhotoCreateInput;

  @Field(() => PhotoUpdateInput, { nullable: false })
  update!: PhotoUpdateInput;
}
