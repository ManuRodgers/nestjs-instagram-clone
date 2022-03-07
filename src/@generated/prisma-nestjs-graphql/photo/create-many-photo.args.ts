import { Field, ArgsType } from '@nestjs/graphql';
import { PhotoCreateManyInput } from './photo-create-many.input';

@ArgsType()
export class CreateManyPhotoArgs {
  @Field(() => [PhotoCreateManyInput], { nullable: false })
  data!: Array<PhotoCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
