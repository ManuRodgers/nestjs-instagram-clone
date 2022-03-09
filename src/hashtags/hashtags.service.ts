import { Injectable } from '@nestjs/common';
import { SeeHashtagInput } from './dto/see-hashtag.input';
import { SeeHashtagOutput } from './dto/see-hashtag.output';
import { PrismaService } from 'nestjs-prisma';
import { Photo } from 'src/@generated/prisma-nestjs-graphql/photo';
import { HashtagPhotosPaginationArgs } from './dto/hashtag-photos-pagination.args';

@Injectable()
export class HashtagsService {
  constructor(private readonly prisma: PrismaService) {}
  async seeHashtag({ hashtag }: SeeHashtagInput): Promise<SeeHashtagOutput> {
    try {
      const foundHashtag = await this.prisma.hashtag.findUnique({
        where: { hashtag },
      });
      if (!foundHashtag) {
        throw new Error('Hashtag not found');
      }
      return foundHashtag;
    } catch (error) {
      console.error(error);
      throw new Error('Hashtag not found');
    }
  }

  async getTotalPhotosForHashtag(id: string): Promise<number> {
    return this.prisma.photo.count({
      where: {
        hashtags: {
          some: {
            id,
          },
        },
      },
    });
  }

  async getPhotosForHashtag(
    id: string,
    { pageNumber, pageSize }: HashtagPhotosPaginationArgs,
  ): Promise<Photo[]> {
    return this.prisma.photo.findMany({
      where: {
        hashtags: {
          some: {
            id,
          },
        },
      },
      take: pageSize,
      skip: pageSize * (pageNumber - 1),
    });
  }
}
