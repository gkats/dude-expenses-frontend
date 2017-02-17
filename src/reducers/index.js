import { combineReducers } from 'redux';
import auth from './auth';
import signup from './signup';
import signIn from './signIn';
import users from './users';
import expenses from './expenses';
import newExpense from './newExpense';

const app = combineReducers({
  auth,
  users,
  signup,
  signIn,
  expenses,
  newExpense
});

export default app;