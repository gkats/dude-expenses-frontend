import { combineReducers } from 'redux';
import expenses from './expenses';

const app = combineReducers({
  expenses
});

export default app;