import { Field, ArgsType, Int } from '@nestjs/graphql';
import { HashtagWhereInput } from './hashtag-where.input';
import { HashtagOrderByWithRelationInput } from './hashtag-order-by-with-relation.input';
import { HashtagWhereUniqueInput } from './hashtag-where-unique.input';
import { HashtagScalarFieldEnum } from './hashtag-scalar-field.enum';

@ArgsType()
export class FindManyHashtagArgs {
  @Field(() => HashtagWhereInput, { nullable: true })
  where?: HashtagWhereInput;

  @Field(() => [HashtagOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<HashtagOrderByWithRelationInput>;

  @Field(() => HashtagWhereUniqueInput, { nullable: true })
  cursor?: HashtagWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [HashtagScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof HashtagScalarFieldEnum>;
}
