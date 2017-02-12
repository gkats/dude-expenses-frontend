import { authenticateUser } from './users';
import { validate } from '../validators/users';

export const SIGN_IN_FIELD_CHANGED = 'SIGN_IN_FIELD_CHANGED';
export const changeField = (name, value) => ({
  type: SIGN_IN_FIELD_CHANGED,
  name,
  value
});

export const SIGN_IN_FORM_VALIDATED = 'SIGN_IN_FORM_VALIDATED';
const invalidateForm = (errors) => ({
  type: SIGN_IN_FORM_VALIDATED,
  errors
});

export const submitForm = (data) => {
  return function(dispatch) {
    let errors = validate(data);

    if (Object.keys(errors).length) {
      dispatch(invalidateForm(errors));
    } else {
      dispatch(authenticateUser(data));
    }
  }
};
