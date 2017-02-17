import { Map } from 'immutable';
import {
  NEW_EXPENSE_FIELD_CHANGED, NEW_EXPENSE_FORM_VALIDATED, NEW_EXPENSE_ADD_CLICKED,
  NEW_EXPENSE_CANCEL_CLICKED
} from '../actions/newExpense';
import {
  EXPENSES_CREATE, EXPENSES_CREATE_SUCCESS, EXPENSES_CREATE_ERROR
} from '../actions/expenses';

const initialState = Map({
  fields: Map({
    priceCents: '',
    date: new Date(),
    tag: '',
    notes: ''
  }),
  errors: {},
  isVisible: false
});

function newExpense(state = initialState, action) {
  switch (action.type) {
    case NEW_EXPENSE_ADD_CLICKED:
      return state.set('isVisible', true);
    case NEW_EXPENSE_CANCEL_CLICKED:
      return state.merge(initialState);
    case NEW_EXPENSE_FIELD_CHANGED:
      return state.setIn(['fields', action.name], action.value);
    case NEW_EXPENSE_FORM_VALIDATED:
      return state.set('errors', action.errors);
    case EXPENSES_CREATE:
      return state.set('errors', {});
    case EXPENSES_CREATE_SUCCESS:
      return state.merge(initialState);
    case EXPENSES_CREATE_ERROR:
      return state.set('errors', action.errors);
    default:
      return state;
  };
}

export default newExpense;