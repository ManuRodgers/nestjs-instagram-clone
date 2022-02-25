import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AuthResult {
  @Field(() => Boolean, { nullable: false })
  ok!: boolean;

  @Field(() => String, { nullable: true })
  accessToken?: string;

  @Field(() => String, { nullable: true })
  refreshToken?: string;

  @Field(() => String, { nullable: true })
  error?: string;
}
