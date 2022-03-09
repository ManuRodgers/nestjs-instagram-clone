import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class HashtagPhotosPaginationArgs {
  @Field(() => Int, { nullable: false })
  pageNumber!: number;

  @Field(() => Int, { nullable: false, defaultValue: 5 })
  pageSize?: number;
}
