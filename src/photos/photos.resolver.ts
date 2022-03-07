import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Hashtag } from 'src/@generated/prisma-nestjs-graphql/hashtag';
import {
  FindManyPhotoArgs,
  Photo,
} from 'src/@generated/prisma-nestjs-graphql/photo';
import { User } from 'src/@generated/prisma-nestjs-graphql/user';
import { CurrentUserId } from 'src/auth/decorators/current-user-id.decorator';
import { Public } from 'src/auth/decorators/public.decorator';

import { CreatePhotoInput } from './dto/create-photo.input';
import { CreatePhotoOutput } from './dto/create-photo.output';
import { SeePhotoInput } from './dto/see-photo.input';
import { SeePhotoOutput } from './dto/see-photo.output';
import { PhotosService } from './photos.service';

@Resolver(() => SeePhotoOutput)
export class PhotosResolver {
  constructor(private readonly photosService: PhotosService) {}

  @Mutation(() => CreatePhotoOutput)
  async createPhoto(
    @Args('createPhotoInput') createPhotoInput: CreatePhotoInput,
    @CurrentUserId() userId: string,
  ): Promise<CreatePhotoOutput> {
    return this.photosService.create(createPhotoInput, userId);
  }

  @Query(() => SeePhotoOutput)
  @Public()
  async seePhoto(
    @Args('seePhotoInput') seePhotoInput: SeePhotoInput,
  ): Promise<SeePhotoOutput> {
    return this.photosService.seePhoto(seePhotoInput);
  }

  @ResolveField('user', () => User)
  async getUserForPhoto(@Parent() { userId }: SeePhotoOutput): Promise<User> {
    return this.photosService.getUserForPhoto(userId);
  }

  @ResolveField('hashtags', () => [Hashtag])
  async getHashtagsForPhoto(
    @Parent() { id }: SeePhotoOutput,
  ): Promise<Hashtag[]> {
    return this.photosService.getHashtagsForPhoto(id);
  }

  @Query(() => [Photo], { name: 'photos' })
  async photos(@Args() findManyPhotoArgs: FindManyPhotoArgs): Promise<Photo[]> {
    return this.photosService.photos(findManyPhotoArgs);
  }
}
