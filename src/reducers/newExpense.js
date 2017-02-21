import { Map } from 'immutable';
import {
  NEW_EXPENSE_FIELD_CHANGED, NEW_EXPENSE_FORM_VALIDATED
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
  success: false
});

function newExpense(state = initialState, action) {
  switch (action.type) {
    case NEW_EXPENSE_FIELD_CHANGED:
      return state.setIn(['fields', action.name], action.value);
    case NEW_EXPENSE_FORM_VALIDATED:
      return state.set('errors', action.errors);
    case EXPENSES_CREATE:
      return state.merge({
        errors: {},
        success: false
      });
    case EXPENSES_CREATE_SUCCESS:
      return state.merge(Object.assign({}, initialState, { success: true }));
    case EXPENSES_CREATE_ERROR:
      return state.merge({
        errors: action.errors
      });
    default:
      return state;
  };
}

export default newExpense;