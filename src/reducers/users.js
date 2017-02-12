import { Map } from 'immutable';
import { USERS_CREATE, USERS_CREATE_SUCCESS, USERS_CREATE_ERROR } from '../actions/users';

const initialState = Map({
  loading: false,
  user: Map({})
});

function users(state = initialState, action) {
  switch (action.type) {
    case USERS_CREATE:
      return state.set('loading', true);
    case USERS_CREATE_SUCCESS:
      return state.merge({
        loading: false,
        user: action.user
      });
    case USERS_CREATE_ERROR:
      return state.set('loading', false);
    default:
      return state;
  };
};

export default users;