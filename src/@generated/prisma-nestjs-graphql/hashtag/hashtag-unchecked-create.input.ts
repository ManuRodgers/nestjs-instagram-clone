import { Field, InputType, HideField } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { PhotoUncheckedCreateNestedManyWithoutHashtagsInput } from '../photo/photo-unchecked-create-nested-many-without-hashtags.input';

@InputType()
export class HashtagUncheckedCreateInput {
  @Field(() => Scalars.GraphQLUUID, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  hashtag!: string;

  @Field(() => PhotoUncheckedCreateNestedManyWithoutHashtagsInput, {
    nullable: true,
  })
  photos?: PhotoUncheckedCreateNestedManyWithoutHashtagsInput;

  @HideField()
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;
}
