import { Field, ArgsType, Int } from '@nestjs/graphql';
import { PhotoWhereInput } from './photo-where.input';
import { PhotoOrderByWithAggregationInput } from './photo-order-by-with-aggregation.input';
import { PhotoScalarFieldEnum } from './photo-scalar-field.enum';
import { PhotoScalarWhereWithAggregatesInput } from './photo-scalar-where-with-aggregates.input';
import { PhotoCountAggregateInput } from './photo-count-aggregate.input';
import { PhotoMinAggregateInput } from './photo-min-aggregate.input';
import { PhotoMaxAggregateInput } from './photo-max-aggregate.input';

@ArgsType()
export class PhotoGroupByArgs {
  @Field(() => PhotoWhereInput, { nullable: true })
  where?: PhotoWhereInput;

  @Field(() => [PhotoOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<PhotoOrderByWithAggregationInput>;

  @Field(() => [PhotoScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof PhotoScalarFieldEnum>;

  @Field(() => PhotoScalarWhereWithAggregatesInput, { nullable: true })
  having?: PhotoScalarWhereWithAggregatesInput;

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
