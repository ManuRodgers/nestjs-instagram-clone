import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Public } from 'src/auth/decorators/public.decorator';

import { SeeHashtagInput } from './dto/see-hashtag.input';
import { SeeHashtagOutput } from './dto/see-hashtag.output';
import { HashtagsService } from './hashtags.service';
import { Photo } from 'src/@generated/prisma-nestjs-graphql/photo';
import { HashtagPhotosPaginationArgs } from './dto/hashtag-photos-pagination.args';

@Resolver(() => SeeHashtagOutput)
export class HashtagsResolver {
  constructor(private readonly hashtagsService: HashtagsService) {}

  @Query(() => SeeHashtagOutput)
  @Public()
  async seeHashtag(
    @Args('seeHashtagInput') seeHashtagInput: SeeHashtagInput,
  ): Promise<SeeHashtagOutput> {
    return this.hashtagsService.seeHashtag(seeHashtagInput);
  }

  @ResolveField('totalPhotos', () => Int)
  async getTotalPhotosForHashtag(
    @Parent() { id }: SeeHashtagOutput,
  ): Promise<number> {
    return this.hashtagsService.getTotalPhotosForHashtag(id);
  }
  @ResolveField('photos', () => [Photo])
  async getPhotosForHashtag(
    @Args() hashtagPhotosPaginationArgs: HashtagPhotosPaginationArgs,
    @Parent() { id }: SeeHashtagOutput,
  ): Promise<Photo[]> {
    return this.hashtagsService.getPhotosForHashtag(
      id,
      hashtagPhotosPaginationArgs,
    );
  }
}
