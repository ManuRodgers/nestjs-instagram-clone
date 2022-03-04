import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
  id = 'id',
  firstName = 'firstName',
  lastName = 'lastName',
  username = 'username',
  email = 'email',
  isEmailVerified = 'isEmailVerified',
  password = 'password',
  refreshToken = 'refreshToken',
  bio = 'bio',
  avatar = 'avatar',
  avatarOutputUrl = 'avatarOutputUrl',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(UserScalarFieldEnum, {
  name: 'UserScalarFieldEnum',
  description: undefined,
});
