import { get, post, queryString } from './api';

export const getExpenses = (authToken, params = {}) => {
  return get(`expenses?${queryString(params)}`, { authToken });
};

export const postExpenses = (authToken, params) => {
  return post('expenses', {
    body: JSON.stringify(params),
    authToken
  });
};

export const getExpensesTags = (authToken) => {
  return get('expenses/tags', { authToken });
}