import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePhotoInput {
  @Field(() => String, { nullable: false })
  file!: string;

  @Field(() => String, { nullable: true })
  caption?: string | null;
}
