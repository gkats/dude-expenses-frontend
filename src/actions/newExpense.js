import { createExpense, updateExpense } from './expenses';
import { validate } from '../validators/expenses';

export const NEW_EXPENSE_FIELD_CHANGED = 'NEW_EXPENSE_FIELD_CHANGED';
export const changeField = (name, value) => ({
  type: NEW_EXPENSE_FIELD_CHANGED,
  name,
  value
});

export const NEW_EXPENSE_FORM_VALIDATED = 'NEW_EXPENSE_FORM_VALIDATED';
const invalidateForm = (errors) => ({
  type: NEW_EXPENSE_FORM_VALIDATED,
  errors
});

export const submitForm = (authToken, data) => {
  return function(dispatch) {
    let errors = validate(data);

    if (Object.keys(errors).length) {
      dispatch(invalidateForm(errors));
    } else {
      if (data.id) {
        dispatch(updateExpense(authToken, data));
      } else {
        dispatch(createExpense(authToken, data));
      }
    }
  }
};
