import {
  getExpenses, postExpenses, getExpensesTags
} from '../services/expenses';

export const EXPENSES_FETCH = 'EXPENSES_FETCH';
const fetchExpensesStart = () => ({
  type: EXPENSES_FETCH
});

export const EXPENSES_FETCH_SUCCESS = 'EXPENSES_FETCH_SUCCESS';
const fetchExpensesSuccess = ({ expenses }) => ({
  type: EXPENSES_FETCH_SUCCESS,
  expenses
});

export const EXPENSES_FETCH_ERROR = 'EXPENSES_FETCH_ERROR';
const fetchExpensesError = ({ message }) => ({
  type: EXPENSES_FETCH_ERROR,
  error: message
});

export const fetchExpenses = (authToken, params = {}) => {
  return function(dispatch) {
    dispatch(fetchExpensesStart());

    return getExpenses(authToken, params)
      .then((response) => {
        response.json().then((json) => {
          if (response.ok) {
            dispatch(fetchExpensesSuccess(json));
          } else {
            dispatch(fetchExpensesError(json));
          }
        })
      })
      .catch((error) => dispatch(fetchExpensesError({ message: 'Something went wrong' })));
  }
};

export const EXPENSES_CREATE = 'EXPENSES_CREATE';
const createExpenseStart = () => ({
  type: EXPENSES_CREATE
});

export const EXPENSES_CREATE_SUCCESS = 'EXPENSES_CREATE_SUCCESS';
const createExpenseSuccess = (expense) => ({
  type: EXPENSES_CREATE_SUCCESS,
  expense
});

export const EXPENSES_CREATE_ERROR = 'EXPENSES_CREATE_ERROR';
const createExpenseError = ({ message, errors }) => ({
  type: EXPENSES_CREATE_ERROR,
  error: message,
  errors
});

export const createExpense = (authToken, data) => {
  return function(dispatch) {
    dispatch(createExpenseStart());

    return postExpenses(authToken, data)
      .then((response) => {
        response.json().then((json) => {
          if (response.ok) {
            dispatch(createExpenseSuccess(json));
          } else {
            dispatch(createExpenseError(json));
          }
        })
      })
      .catch((error) => dispatch(createExpenseError({ message: 'Something went wrong' })));
  };
};

export const EXPENSES_TAGS_FETCH = 'EXPENSES_TAGS_FETCH';
const fetchExpensesTagsStart = () => ({
  type: EXPENSES_TAGS_FETCH
});

export const EXPENSES_TAGS_FETCH_SUCCESS = 'EXPENSES_TAGS_FETCH_SUCCESS';
const fetchExpensesTagsSuccess = ({ tags }) => ({
  type: EXPENSES_TAGS_FETCH_SUCCESS,
  tags
});

export const EXPENSES_TAGS_FETCH_ERROR = 'EXPENSES_TAGS_FETCH_ERROR';
const fetchExpensesTagsError = ({ message }) => ({
  type: EXPENSES_TAGS_FETCH_ERROR,
  error: message
});

export const fetchExpensesTags = (authToken) => {
  return function(dispatch) {
    dispatch(fetchExpensesTagsStart());

    return getExpensesTags(authToken)
      .then((response) => {
        response.json().then((json) => {
          if (response.ok) {
            dispatch(fetchExpensesTagsSuccess(json));
          } else {
            dispatch(fetchExpensesTagsError(json));
          }
        })
      })
      .catch((error) => dispatch(fetchExpensesTagsError({ message: 'Something went wrong' })));
  }
};