import { get, post } from './api';

export const getExpenses = (authToken) => {
  return get('expenses', { authToken });
};

export const postExpenses = (authToken, params) => {
  return post('expenses', {
    body: JSON.stringify(params),
    authToken
  });
};
