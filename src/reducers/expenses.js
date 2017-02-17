import { Map, List } from 'immutable';
import {
  EXPENSES_FETCH, EXPENSES_FETCH_SUCCESS, EXPENSES_FETCH_ERROR,
  EXPENSES_CREATE, EXPENSES_CREATE_SUCCESS, EXPENSES_CREATE_ERROR
} from '../actions/expenses';

const initialState = Map({
  records: List([]),
  loading: false
});

// expenses should be map id -> attributes

function expenses(state = initialState, action) {
  switch (action.type) {
    case EXPENSES_FETCH:
      return state.set('loading', true);
    case EXPENSES_FETCH_SUCCESS:
      return state.merge({
        loading: false,
        records: action.expenses
      });
    case EXPENSES_FETCH_ERROR:
      return state.set('loading', false);
    case EXPENSES_CREATE:
      return state.set('loading', true);
    case EXPENSES_CREATE_SUCCESS:
      return state.merge({
        loading: false,
        records: state.get('records').push(action.expense)
      });
    case EXPENSES_CREATE_ERROR:
      return state.set('loading', false);
    default:
      return state;
  };
};

export default expenses;