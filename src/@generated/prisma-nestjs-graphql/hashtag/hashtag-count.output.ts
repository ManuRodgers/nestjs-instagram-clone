import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class HashtagCount {
  @Field(() => Int, { nullable: false })
  photos?: number;
}
