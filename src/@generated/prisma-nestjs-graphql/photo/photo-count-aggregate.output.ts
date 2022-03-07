import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class PhotoCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  file!: number;

  @Field(() => Int, { nullable: false })
  photoOutputUrl!: number;

  @Field(() => Int, { nullable: false })
  caption!: number;

  @Field(() => Int, { nullable: false })
  userId!: number;

  @Field(() => Int, { nullable: false })
  createdAt!: number;

  @Field(() => Int, { nullable: false })
  updatedAt!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
