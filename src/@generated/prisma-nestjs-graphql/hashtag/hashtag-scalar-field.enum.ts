import { registerEnumType } from '@nestjs/graphql';

export enum HashtagScalarFieldEnum {
  id = 'id',
  hashtag = 'hashtag',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(HashtagScalarFieldEnum, {
  name: 'HashtagScalarFieldEnum',
  description: undefined,
});
