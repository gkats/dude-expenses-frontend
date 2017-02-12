import { Map, List } from 'immutable';
import { FETCH_EXPENSES, FETCH_EXPENSES_SUCCESS, FETCH_EXPENSES_ERROR } from '../actions/expenses';

const initialState = Map({
  expenses: List([]),
  loading: false
});

// expenses should be map id -> attributes

function expenses(state = initialState, action) {
  switch (action.type) {
    case FETCH_EXPENSES:
      return state.set('loading', true);
    case FETCH_EXPENSES_SUCCESS:
      return state.merge({
        loading: false,
        expenses: action.expenses
      });
    case FETCH_EXPENSES_ERROR:
      return state.set('loading', false);
    default:
      return state;
  };
};

export default expenses;