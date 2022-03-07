import { Field, ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Upload from 'graphql-upload';
import { User } from '../user/user.model';
import { Hashtag } from '../hashtag/hashtag.model';
import { PhotoCount } from './photo-count.output';

@ObjectType()
export class Photo {
  @Field(() => Scalars.GraphQLUUID, { nullable: false })
  id!: string;

  @Field(() => Upload.GraphQLUpload, { nullable: true })
  file!: string | null;

  @Field(() => String, { nullable: true })
  photoOutputUrl!: string | null;

  @Field(() => String, { nullable: true })
  caption!: string | null;

  @Field(() => Scalars.GraphQLUUID, { nullable: false })
  userId!: string;

  @Field(() => User, { nullable: false })
  user?: User;

  @Field(() => [Hashtag], { nullable: true })
  hashtags?: Array<Hashtag>;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => PhotoCount, { nullable: false })
  _count?: PhotoCount;
}
