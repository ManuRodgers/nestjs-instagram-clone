import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from 'src/@generated/prisma-nestjs-graphql/user';

@ObjectType()
export class SeeProfileOutput extends User {
  @Field(() => Int, { nullable: true })
  totalFollowing?: number;

  @Field(() => Int, { nullable: true })
  totalFollowers?: number;

  @Field(() => Boolean, { nullable: true })
  isMe?: boolean;

  @Field(() => Boolean, { nullable: true })
  isFollowing?: boolean;
}
