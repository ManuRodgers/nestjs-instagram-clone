import { Field, ArgsType, Int } from '@nestjs/graphql';
import { PhotoWhereInput } from './photo-where.input';
import { PhotoOrderByWithRelationInput } from './photo-order-by-with-relation.input';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';
import { PhotoCountAggregateInput } from './photo-count-aggregate.input';
import { PhotoMinAggregateInput } from './photo-min-aggregate.input';
import { PhotoMaxAggregateInput } from './photo-max-aggregate.input';

@ArgsType()
export class PhotoAggregateArgs {
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

  @Field(() => PhotoCountAggregateInput, { nullable: true })
  _count?: PhotoCountAggregateInput;

  @Field(() => PhotoMinAggregateInput, { nullable: true })
  _min?: PhotoMinAggregateInput;

  @Field(() => PhotoMaxAggregateInput, { nullable: true })
  _max?: PhotoMaxAggregateInput;
}
