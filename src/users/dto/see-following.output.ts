import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/@generated/prisma-nestjs-graphql/user';

@ObjectType()
export class SeeFollowingOutput {
  @Field(() => Boolean, { nullable: false })
  ok!: boolean;

  @Field(() => String, { nullable: true })
  error?: string;

  @Field(() => [User], { nullable: true })
  following?: User[];

  @Field(() => Boolean, { nullable: true })
  hasMore?: boolean;
}
