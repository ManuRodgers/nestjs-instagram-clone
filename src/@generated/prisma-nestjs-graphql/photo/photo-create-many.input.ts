import { Field, InputType, HideField } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Upload from 'graphql-upload';

@InputType()
export class PhotoCreateManyInput {
  @Field(() => Scalars.GraphQLUUID, { nullable: true })
  id?: string;

  @Field(() => Upload.GraphQLUpload, { nullable: true })
  file?: string;

  @Field(() => String, { nullable: true })
  photoOutputUrl?: string;

  @Field(() => String, { nullable: true })
  caption?: string;

  @Field(() => Scalars.GraphQLUUID, { nullable: false })
  userId!: string;

  @HideField()
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;
}
