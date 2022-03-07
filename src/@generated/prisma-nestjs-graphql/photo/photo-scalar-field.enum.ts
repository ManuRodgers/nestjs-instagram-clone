import { registerEnumType } from '@nestjs/graphql';

export enum PhotoScalarFieldEnum {
  id = 'id',
  file = 'file',
  photoOutputUrl = 'photoOutputUrl',
  caption = 'caption',
  userId = 'userId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(PhotoScalarFieldEnum, {
  name: 'PhotoScalarFieldEnum',
  description: undefined,
});
