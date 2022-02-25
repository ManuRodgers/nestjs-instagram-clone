import { Field, InputType } from '@nestjs/graphql';

import { JwtPayload } from './jwt-payload.input';

@InputType()
export class JwtPayloadWithRefreshToken extends JwtPayload {
  @Field(() => String, { nullable: false })
  refreshToken!: string;
}
