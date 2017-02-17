import { Map } from 'immutable';
import { SIGN_IN_FIELD_CHANGED, SIGN_IN_FORM_VALIDATED } from '../actions/signIn';
import { USERS_AUTHENTICATE_SUCCESS, USERS_AUTHENTICATE_ERROR } from '../actions/users';

const initialState = Map({
  fields: Map({
    email: '',
    password: ''
  }),
  errors: {}
});

function signIn(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN_FIELD_CHANGED:
      return state.setIn(['fields', action.name], action.value);
    case SIGN_IN_FORM_VALIDATED:
      return state.set('errors', action.errors)
    case USERS_AUTHENTICATE_SUCCESS:
      return state.merge(initialState);
    case USERS_AUTHENTICATE_ERROR:
      return state.set('errors', action.errors);
    default:
      return state;
  };
}

export default signIn;