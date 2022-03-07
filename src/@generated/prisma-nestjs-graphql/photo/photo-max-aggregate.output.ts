import { Field, ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Upload from 'graphql-upload';

@ObjectType()
export class PhotoMaxAggregate {
  @Field(() => Scalars.GraphQLUUID, { nullable: true })
  id?: string;

  @Field(() => Upload.GraphQLUpload, { nullable: true })
  file?: string;

  @Field(() => String, { nullable: true })
  photoOutputUrl?: string;

  @Field(() => String, { nullable: true })
  caption?: string;

  @Field(() => Scalars.GraphQLUUID, { nullable: true })
  userId?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}
