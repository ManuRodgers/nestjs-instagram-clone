import { Field, InputType } from '@nestjs/graphql';
import { PhotoScalarWhereInput } from './photo-scalar-where.input';
import { PhotoUpdateManyMutationInput } from './photo-update-many-mutation.input';

@InputType()
export class PhotoUpdateManyWithWhereWithoutUserInput {
  @Field(() => PhotoScalarWhereInput, { nullable: false })
  where!: PhotoScalarWhereInput;

  @Field(() => PhotoUpdateManyMutationInput, { nullable: false })
  data!: PhotoUpdateManyMutationInput;
}
