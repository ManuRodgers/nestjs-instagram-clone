import { Field, ArgsType, Int } from '@nestjs/graphql';
import { PhotoWhereInput } from './photo-where.input';
import { PhotoOrderByWithRelationInput } from './photo-order-by-with-relation.input';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';
import { PhotoScalarFieldEnum } from './photo-scalar-field.enum';

@ArgsType()
export class FindFirstPhotoArgs {
  @Field(() => PhotoWhereInput, { nullable: true })
  where?: PhotoWhereInput;

  @Field(() => [PhotoOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<PhotoOrderByWithRelationInput>;

  @Field(() => PhotoWhereUniqueInput, { nullable: true })
  cursor?: PhotoWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [PhotoScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof PhotoScalarFieldEnum>;
}
