import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {
  @Field(() => Int, { nullable: false })
  following?: number;

  @Field(() => Int, { nullable: false })
  followers?: number;

  @Field(() => Int, { nullable: false })
  photos?: number;
}
