import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class PhotoCount {
  @Field(() => Int, { nullable: false })
  hashtags?: number;
}
