import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';

@ObjectType()
export class CreatePhotoOutput {
  @Field(() => GraphQLUUID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: true })
  file?: string | null;

  @Field(() => String, { nullable: true })
  photoOutputUrl?: string | null;

  @Field(() => String, { nullable: true })
  caption?: string | null;

  @Field(() => GraphQLUUID, { nullable: false })
  userId!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
}
