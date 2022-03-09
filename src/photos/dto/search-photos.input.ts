import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SearchPhotosInput {
  @Field(() => String, { nullable: false })
  keyword!: string;
}
