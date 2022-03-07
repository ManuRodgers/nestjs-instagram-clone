import { Field, ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Upload from 'graphql-upload';
import { PhotoCountAggregate } from './photo-count-aggregate.output';
import { PhotoMinAggregate } from './photo-min-aggregate.output';
import { PhotoMaxAggregate } from './photo-max-aggregate.output';

@ObjectType()
export class PhotoGroupBy {
  @Field(() => Scalars.GraphQLUUID, { nullable: false })
  id!: string;

  @Field(() => Upload.GraphQLUpload, { nullable: true })
  file?: string;

  @Field(() => String, { nullable: true })
  photoOutputUrl?: string;

  @Field(() => String, { nullable: true })
  caption?: string;

  @Field(() => Scalars.GraphQLUUID, { nullable: false })
  userId!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;

  @Field(() => PhotoCountAggregate, { nullable: true })
  _count?: PhotoCountAggregate;

  @Field(() => PhotoMinAggregate, { nullable: true })
  _min?: PhotoMinAggregate;

  @Field(() => PhotoMaxAggregate, { nullable: true })
  _max?: PhotoMaxAggregate;
}
