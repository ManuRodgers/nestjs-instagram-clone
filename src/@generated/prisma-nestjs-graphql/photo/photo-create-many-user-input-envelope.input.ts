import { Field, InputType } from '@nestjs/graphql';
import { PhotoCreateManyUserInput } from './photo-create-many-user.input';

@InputType()
export class PhotoCreateManyUserInputEnvelope {
  @Field(() => [PhotoCreateManyUserInput], { nullable: false })
  data!: Array<PhotoCreateManyUserInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
