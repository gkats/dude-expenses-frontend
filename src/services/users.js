import { post } from './api';

export const postUsers = (params) => {
  return post('users', {
    body: JSON.stringify(params)
  });
};

export const postUsersAuthenticate = (params) => {
  return post('users/authenticate', {
    body: JSON.stringify(params)
  });
};