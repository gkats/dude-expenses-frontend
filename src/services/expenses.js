import { get, post, patch, queryString } from './api';

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
};

export const getExpense = (authToken, id) => {
  return get(`expenses/${id}`, { authToken });
};

export const patchExpense = (authToken, params) => {
  let id = params.id;
  delete params.id;

  return patch(`expenses/${id}`, {
    body: JSON.stringify(params),
    authToken
  });
}