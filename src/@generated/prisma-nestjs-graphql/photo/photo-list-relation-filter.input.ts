import { Field, InputType } from '@nestjs/graphql';
import { PhotoWhereInput } from './photo-where.input';

@InputType()
export class PhotoListRelationFilter {
  @Field(() => PhotoWhereInput, { nullable: true })
  every?: PhotoWhereInput;

  @Field(() => PhotoWhereInput, { nullable: true })
  some?: PhotoWhereInput;

  @Field(() => PhotoWhereInput, { nullable: true })
  none?: PhotoWhereInput;
}
