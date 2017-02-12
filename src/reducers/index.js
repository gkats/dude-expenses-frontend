import { combineReducers } from 'redux';
import auth from './auth';
import signup from './signup';
import users from './users';
import expenses from './expenses';

const app = combineReducers({
  auth,
  users,
  signup,
  expenses
});

export default app;