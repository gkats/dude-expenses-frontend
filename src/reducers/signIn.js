import { Map } from 'immutable';
import { SIGN_IN_FIELD_CHANGED, SIGN_IN_FORM_VALIDATED } from '../actions/signIn';
import { USERS_AUTHENTICATE_SUCCESS, USERS_AUTHENTICATE_ERROR } from '../actions/users';

const initialState = Map({
  fields: Map({
    email: '',
    password: ''
  }),
  errors: {},
  success: false,
  error: false
});

function signIn(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN_FIELD_CHANGED:
      return state.setIn(['fields', action.name], action.value);
    case SIGN_IN_FORM_VALIDATED:
      return state.set('errors', action.errors)
    case USERS_AUTHENTICATE_SUCCESS:
      return state.merge(initialState, {
        success: true,
        error: false
      });
    case USERS_AUTHENTICATE_ERROR:
      return state.merge({
        errors: action.errors,
        error: true,
        success: false
      });
    default:
      return state;
  };
}

export default signIn;