import { createUser } from './users';
import { validate } from '../validators/users';

export const SIGNUP_FIELD_CHANGED = 'SIGNUP_FIELD_CHANGED';
export const changeField = (name, value) => ({
  type: SIGNUP_FIELD_CHANGED,
  name,
  value
});

export const SIGNUP_FORM_VALIDATED = 'SIGNUP_FORM_VALIDATED';
const invalidateForm = (errors) => ({
  type: SIGNUP_FORM_VALIDATED,
  errors
});

export const submitForm = (data) => {
  return function(dispatch) {
    let errors = validate(data);

    if (Object.keys(errors).length) {
      dispatch(invalidateForm(errors));
    } else {
      dispatch(createUser(data));
    }
  }
};
