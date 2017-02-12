import { get } from './api';

export const getExpenses = (authToken) => {
  return get('expenses', { authToken });
};
