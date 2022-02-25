import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class JwtPayload {
  @Field(() => String, { nullable: false })
  username!: string;

  @Field(() => String, { nullable: false })
  sub!: string;

  @Field(() => Int, { nullable: false })
  iat?: number;

  @Field(() => Int, { nullable: false })
  exp?: number;
}
