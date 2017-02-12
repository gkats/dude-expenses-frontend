import { combineReducers } from 'redux';
import auth from './auth';
import signup from './signup';
import signIn from './signIn';
import users from './users';
import expenses from './expenses';

const app = combineReducers({
  auth,
  users,
  signup,
  signIn,
  expenses
});

export default app;