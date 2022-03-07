import { Field, ObjectType, HideField } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Upload from 'graphql-upload';
import { Photo } from '../photo/photo.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {
  @Field(() => Scalars.GraphQLUUID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  firstName!: string;

  @Field(() => String, { nullable: true })
  lastName!: string | null;

  @Field(() => String, { nullable: false })
  username!: string;

  @Field(() => Scalars.GraphQLEmailAddress, { nullable: false })
  email!: string;

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  isEmailVerified!: boolean;

  @HideField()
  password!: string;

  @Field(() => String, { nullable: true })
  refreshToken!: string | null;

  @Field(() => String, { nullable: true })
  bio!: string | null;

  @Field(() => Upload.GraphQLUpload, { nullable: true })
  avatar!: string | null;

  @Field(() => String, { nullable: true })
  avatarOutputUrl!: string | null;

  @HideField()
  following?: Array<User>;

  @HideField()
  followers?: Array<User>;

  @Field(() => [Photo], { nullable: true })
  photos?: Array<Photo>;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => UserCount, { nullable: false })
  _count?: UserCount;
}
