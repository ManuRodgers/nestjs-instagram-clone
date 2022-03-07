import { Field, ObjectType } from '@nestjs/graphql';
import { PhotoCountAggregate } from './photo-count-aggregate.output';
import { PhotoMinAggregate } from './photo-min-aggregate.output';
import { PhotoMaxAggregate } from './photo-max-aggregate.output';

@ObjectType()
export class AggregatePhoto {
  @Field(() => PhotoCountAggregate, { nullable: true })
  _count?: PhotoCountAggregate;

  @Field(() => PhotoMinAggregate, { nullable: true })
  _min?: PhotoMinAggregate;

  @Field(() => PhotoMaxAggregate, { nullable: true })
  _max?: PhotoMaxAggregate;
}
