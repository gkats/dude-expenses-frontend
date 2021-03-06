import { Map } from 'immutable';
import { SIGNUP_FIELD_CHANGED, SIGNUP_FORM_VALIDATED } from '../actions/signup';
import {
  USERS_CREATE_SUCCESS, USERS_CREATE_ERROR, USERS_AUTHENTICATE_SUCCESS,
  USERS_AUTHENTICATE_ERROR
} from '../actions/users';

const initialState = Map({
  fields: Map({
    email: '',
    password: ''
  }),
  errors: {},
  success: false,
  error: false
});

function signup(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_FIELD_CHANGED:
      return state.setIn(['fields', action.name], action.value);
    case SIGNUP_FORM_VALIDATED:
      return state.set('errors', action.errors)
    case USERS_CREATE_SUCCESS:
      return state.merge(initialState);
    case USERS_CREATE_ERROR:
      return state.set('errors', action.errors);
    case USERS_AUTHENTICATE_SUCCESS:
      return state.merge({
        success: true,
        errors: false
      });
    case USERS_AUTHENTICATE_ERROR:
      return state.merge({
        success: false,
        error: true
      });
    default:
      return state;
  };
}

export default signup;