import { Field, Int, ObjectType } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
import { Photo } from 'src/@generated/prisma-nestjs-graphql/photo';

@ObjectType()
export class SeeHashtagOutput {
  @Field(() => GraphQLUUID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  hashtag!: string;

  @Field(() => [Photo], { nullable: true })
  photos?: Photo[];

  @Field(() => Int, { nullable: true })
  totalPhotos?: number;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | null;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | null;
}
