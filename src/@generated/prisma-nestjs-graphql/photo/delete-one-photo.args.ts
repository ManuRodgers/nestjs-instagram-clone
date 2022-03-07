import { Field, ArgsType } from '@nestjs/graphql';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';

@ArgsType()
export class DeleteOnePhotoArgs {
  @Field(() => PhotoWhereUniqueInput, { nullable: false })
  where!: PhotoWhereUniqueInput;
}
