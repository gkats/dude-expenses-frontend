import { USERS_AUTHENTICATE_SUCCESS } from '../actions/users';

const initialState = {
  token: null
};

function auth(state = initialState, action) {
  switch (action.type) {
    case USERS_AUTHENTICATE_SUCCESS:
      return Object.assign({}, state, { token: action.token });
    default:
      return state;
  };
};

export default auth;