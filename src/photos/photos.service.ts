import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { Hashtag } from 'src/@generated/prisma-nestjs-graphql/hashtag';
import {
  FindManyPhotoArgs,
  Photo,
} from 'src/@generated/prisma-nestjs-graphql/photo';
import { User } from 'src/@generated/prisma-nestjs-graphql/user';

import { CreatePhotoInput } from './dto/create-photo.input';
import { CreatePhotoOutput } from './dto/create-photo.output';
import { SeePhotoInput } from './dto/see-photo.input';
import { SeePhotoOutput } from './dto/see-photo.output';

@Injectable()
export class PhotosService {
  constructor(private readonly prisma: PrismaService) {}

  async seePhoto({ id }: SeePhotoInput): Promise<SeePhotoOutput> {
    return await this.prisma.photo.findUnique({ where: { id } });
  }

  async getUserForPhoto(userId: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { id: userId } });
  }

  async getHashtagsForPhoto(id: string): Promise<Hashtag[]> {
    return this.prisma.hashtag.findMany({
      where: {
        photos: {
          some: {
            id,
          },
        },
      },
    });
  }

  async photos(findManyPhotoArgs: FindManyPhotoArgs): Promise<Photo[]> {
    return this.prisma.photo.findMany(findManyPhotoArgs);
  }

  async create(
    { caption, file }: CreatePhotoInput,
    userId: string,
  ): Promise<CreatePhotoOutput> {
    let hashTagsConnectOrCreate = [];
    if (caption) {
      const hashtags = caption.match(/#[\w]+/g);
      hashTagsConnectOrCreate = hashtags.map((hashtag) => ({
        where: {
          hashtag,
        },
        create: {
          hashtag,
        },
      }));
    }
    return await this.prisma.photo.create({
      data: {
        caption,
        file,
        user: {
          connect: {
            id: userId,
          },
        },
        ...(hashTagsConnectOrCreate.length !== 0 && {
          hashtags: {
            connectOrCreate: hashTagsConnectOrCreate,
          },
        }),
      },
    });
  }
}
