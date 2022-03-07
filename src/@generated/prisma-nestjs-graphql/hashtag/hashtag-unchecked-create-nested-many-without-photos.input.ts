import { Field, InputType } from '@nestjs/graphql';
import { HashtagCreateWithoutPhotosInput } from './hashtag-create-without-photos.input';
import { HashtagCreateOrConnectWithoutPhotosInput } from './hashtag-create-or-connect-without-photos.input';
import { HashtagWhereUniqueInput } from './hashtag-where-unique.input';

@InputType()
export class HashtagUncheckedCreateNestedManyWithoutPhotosInput {
  @Field(() => [HashtagCreateWithoutPhotosInput], { nullable: true })
  create?: Array<HashtagCreateWithoutPhotosInput>;

  @Field(() => [HashtagCreateOrConnectWithoutPhotosInput], { nullable: true })
  connectOrCreate?: Array<HashtagCreateOrConnectWithoutPhotosInput>;

  @Field(() => [HashtagWhereUniqueInput], { nullable: true })
  connect?: Array<HashtagWhereUniqueInput>;
}
