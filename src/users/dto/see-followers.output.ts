import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from 'src/@generated/prisma-nestjs-graphql/user';

@ObjectType()
export class SeeFollowersOutput {
  @Field(() => Boolean, { nullable: false })
  ok!: boolean;

  @Field(() => String, { nullable: true })
  error?: string;

  @Field(() => [User], { nullable: true })
  followers?: User[];

  @Field(() => Int, { nullable: true })
  totalPages?: number;
}
