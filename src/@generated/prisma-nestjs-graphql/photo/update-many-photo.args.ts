import { Field, ArgsType } from '@nestjs/graphql';
import { PhotoUpdateManyMutationInput } from './photo-update-many-mutation.input';
import { PhotoWhereInput } from './photo-where.input';

@ArgsType()
export class UpdateManyPhotoArgs {
  @Field(() => PhotoUpdateManyMutationInput, { nullable: false })
  data!: PhotoUpdateManyMutationInput;

  @Field(() => PhotoWhereInput, { nullable: true })
  where?: PhotoWhereInput;
}
