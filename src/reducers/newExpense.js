import { Map } from 'immutable';
import {
  NEW_EXPENSE_FIELD_CHANGED, NEW_EXPENSE_FORM_VALIDATED
} from '../actions/newExpense';
import {
  EXPENSE_FETCH, EXPENSE_FETCH_SUCCESS,
  EXPENSES_CREATE, EXPENSES_CREATE_SUCCESS, EXPENSES_CREATE_ERROR,
  EXPENSES_UPDATE, EXPENSES_UPDATE_SUCCESS, EXPENSES_UPDATE_ERROR,
  EXPENSES_DESTROY, EXPENSES_DESTROY_SUCCESS
} from '../actions/expenses';

const initialState = Map({
  fields: Map({
    id: null,
    priceCents: '',
    date: new Date(),
    tag: '',
    notes: ''
  }),
  errors: Map({}),
  success: false
});

function newExpense(state = initialState, action) {
  switch (action.type) {
    case NEW_EXPENSE_FIELD_CHANGED:
      return state.setIn(['fields', action.name], action.value);
    case NEW_EXPENSE_FORM_VALIDATED:
      return state.set('errors', Map(action.errors));
    case EXPENSES_CREATE:
      return state.merge({
        errors: Map({}),
        success: false
      });
    case EXPENSES_CREATE_SUCCESS:
      return state.merge(
        Object.assign({}, initialState, { success: true })
      );
    case EXPENSES_CREATE_ERROR:
      return state.merge({
        errors: Map(action.errors)
      });
    case EXPENSE_FETCH:
      return state.mergeDeep({
        fields: Map({})
      });
    case EXPENSE_FETCH_SUCCESS:
      const expense = action.expense;
      if (expense) {
        let { id, priceCents, tag, date, notes } = expense;

        return state.mergeDeep({
          fields: {
            date: new Date(date),
            id,
            priceCents,
            tag,
            notes
          }
        });
      } else {
        return state;
      }
    case EXPENSES_UPDATE:
      return state.merge({
        errors: {},
        success: false
      });
    case EXPENSES_UPDATE_SUCCESS:
      return state.merge(
        Object.assign({}, initialState, { success: true })
      );
    case EXPENSES_UPDATE_ERROR:
      return state.merge({
        errors: Map(action.errors)
      });
    case EXPENSES_DESTROY:
      return state.merge({
        errors: {},
        success: false
      });
    case EXPENSES_DESTROY_SUCCESS:
      return state.merge(
        Object.assign({}, initialState, { success: true })
      );
    default:
      return state;
  };
}

export default newExpense;