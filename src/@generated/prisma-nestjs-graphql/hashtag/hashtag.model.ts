import { Field, ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Photo } from '../photo/photo.model';
import { HashtagCount } from './hashtag-count.output';

@ObjectType()
export class Hashtag {
  @Field(() => Scalars.GraphQLUUID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  hashtag!: string;

  @Field(() => [Photo], { nullable: true })
  photos?: Array<Photo>;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => HashtagCount, { nullable: false })
  _count?: HashtagCount;
}
