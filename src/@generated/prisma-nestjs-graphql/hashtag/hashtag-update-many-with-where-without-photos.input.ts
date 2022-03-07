import { Field, InputType } from '@nestjs/graphql';
import { HashtagScalarWhereInput } from './hashtag-scalar-where.input';
import { HashtagUpdateManyMutationInput } from './hashtag-update-many-mutation.input';

@InputType()
export class HashtagUpdateManyWithWhereWithoutPhotosInput {
  @Field(() => HashtagScalarWhereInput, { nullable: false })
  where!: HashtagScalarWhereInput;

  @Field(() => HashtagUpdateManyMutationInput, { nullable: false })
  data!: HashtagUpdateManyMutationInput;
}
