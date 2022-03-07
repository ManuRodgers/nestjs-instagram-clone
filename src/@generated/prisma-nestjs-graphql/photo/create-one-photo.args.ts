import { Field, ArgsType } from '@nestjs/graphql';
import { PhotoCreateInput } from './photo-create.input';

@ArgsType()
export class CreateOnePhotoArgs {
  @Field(() => PhotoCreateInput, { nullable: false })
  data!: PhotoCreateInput;
}
