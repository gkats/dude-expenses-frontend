import { postUsers, postUsersAuthenticate } from '../services/users';

export const USERS_CREATE = 'USERS_CREATE';
const createUserStart = () => ({
  type: USERS_CREATE
});

export const USERS_CREATE_SUCCESS = 'USERS_CREATE_SUCCESS';
const createUserSuccess = (user) => ({
  type: USERS_CREATE_SUCCESS,
  user
});

export const USERS_CREATE_ERROR = 'USERS_CREATE_ERROR';
const createUserError = ({ message, errors }) => ({
  type: USERS_CREATE_ERROR,
  error: message,
  errors
});

export const createUser = (params) => {
  return function(dispatch) {
    dispatch(createUserStart());

    return postUsers(params)
      .then((response) => {
        response.json().then((json) => {
          if (response.ok) {
            dispatch(createUserSuccess(json));
          } else {
            dispatch(createUserError(json));
          }
        })
      })
      .catch((error) => dispatch(createUserError({ message: 'Something went wrong' })));
  };
};

export const USERS_AUTHENTICATE = 'USERS_AUTHENTICATE';
const authenticateUserStart = () => ({
  type: USERS_AUTHENTICATE
});

export const USERS_AUTHENTICATE_SUCCESS = 'USERS_AUTHENTICATE_SUCCESS';
const authenticateUserSuccess = ({ token }) => ({
  type: USERS_AUTHENTICATE_SUCCESS,
  token
});

export const USERS_AUTHENTICATE_ERROR = 'USERS_AUTHENTICATE_ERROR';
const authenticateUserError = ({ message, errors }) => ({
  type: USERS_AUTHENTICATE_ERROR,
  error: message,
  errors
});

export const authenticateUser = (params) => {
  return function(dispatch) {
    dispatch(authenticateUserStart());

    return postUsersAuthenticate(params)
      .then((response) => {
        response.json().then((json) => {
          if (response.ok) {
            dispatch(authenticateUserSuccess(json));
          } else {
            dispatch(authenticateUserError(json));
          }
        })
      })
      .catch((error) => dispatch(authenticateUserError({ message: 'Something went wrong' })));
  };
};