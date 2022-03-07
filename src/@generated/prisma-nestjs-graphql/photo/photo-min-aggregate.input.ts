import { Field, InputType, HideField } from '@nestjs/graphql';

@InputType()
export class PhotoMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  file?: true;

  @Field(() => Boolean, { nullable: true })
  photoOutputUrl?: true;

  @Field(() => Boolean, { nullable: true })
  caption?: true;

  @Field(() => Boolean, { nullable: true })
  userId?: true;

  @HideField()
  createdAt?: true;

  @HideField()
  updatedAt?: true;
}
