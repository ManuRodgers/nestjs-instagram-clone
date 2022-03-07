import { Field, InputType, HideField } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { PhotoCreateNestedManyWithoutHashtagsInput } from '../photo/photo-create-nested-many-without-hashtags.input';

@InputType()
export class HashtagCreateInput {
  @Field(() => Scalars.GraphQLUUID, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  hashtag!: string;

  @Field(() => PhotoCreateNestedManyWithoutHashtagsInput, { nullable: true })
  photos?: PhotoCreateNestedManyWithoutHashtagsInput;

  @HideField()
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;
}
