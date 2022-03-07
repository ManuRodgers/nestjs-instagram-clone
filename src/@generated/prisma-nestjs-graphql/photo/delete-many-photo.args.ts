import { Field, ArgsType } from '@nestjs/graphql';
import { PhotoWhereInput } from './photo-where.input';

@ArgsType()
export class DeleteManyPhotoArgs {
  @Field(() => PhotoWhereInput, { nullable: true })
  where?: PhotoWhereInput;
}
