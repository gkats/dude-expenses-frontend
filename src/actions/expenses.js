import {
  getExpenses, postExpenses, getExpensesTags, getExpense, patchExpense,
  deleteExpense
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

export const EXPENSE_FETCH = 'EXPENSE_FETCH';
const fetchExpenseStart = () => ({
  type: EXPENSE_FETCH
});

export const EXPENSE_FETCH_SUCCESS = 'EXPENSE_FETCH_SUCCESS';
const fetchExpenseSuccess = (expense) => ({
  type: EXPENSE_FETCH_SUCCESS,
  expense
});

export const EXPENSE_FETCH_ERROR = 'EXPENSE_FETCH_ERROR';
const fetchExpenseError = ({ message }) => ({
  type: EXPENSE_FETCH_ERROR,
  error: message
});

export const fetchExpense = (id, authToken) => {
  return function(dispatch) {
    dispatch(fetchExpenseStart());

    return getExpense(authToken, id)
      .then((response) => {
        response.json().then((json) => {
          if (response.ok) {
            dispatch(fetchExpenseSuccess(json));
          } else {
            dispatch(fetchExpenseError(json));
          }
        })
      })
      .catch((error) => dispatch(fetchExpenseError({ message: 'Something went wrong' })));
  }
};

export const EXPENSES_UPDATE = 'EXPENSES_UPDATE';
const updateExpenseStart = () => ({
  type: EXPENSES_UPDATE
});

export const EXPENSES_UPDATE_SUCCESS = 'EXPENSES_UPDATE_SUCCESS';
const updateExpenseSuccess = (expense) => ({
  type: EXPENSES_UPDATE_SUCCESS,
  expense
});

export const EXPENSES_UPDATE_ERROR = 'EXPENSES_UPDATE_ERROR';
const updateExpenseError = ({ message, errors }) => ({
  type: EXPENSES_UPDATE_ERROR,
  error: message,
  errors
});

export const updateExpense = (authToken, data) => {
  return function(dispatch) {
    dispatch(updateExpenseStart());

    return patchExpense(authToken, data)
      .then((response) => {
        response.json().then((json) => {
          if (response.ok) {
            dispatch(updateExpenseSuccess(json));
          } else {
            dispatch(updateExpenseError(json));
          }
        })
      })
      .catch((error) => dispatch(updateExpenseError({ message: 'Something went wrong' })));
  };
};

export const EXPENSES_DESTROY = 'EXPENSES_DESTROY';
const destroyExpenseStart = () => ({
  type: EXPENSES_DESTROY
});

export const EXPENSES_DESTROY_SUCCESS = 'EXPENSES_DESTROY_SUCCESS';
const destroyExpenseSuccess = ({ id }) => ({
  type: EXPENSES_DESTROY_SUCCESS,
  id
});

export const EXPENSES_DESTROY_ERROR = 'EXPENSES_DESTROY_ERROR';
const destroyExpenseError = ({ message }) => ({
  type: EXPENSES_DESTROY_ERROR,
  error: message
});

export const destroyExpense = (authToken, id) => {
  return function(dispatch) {
    dispatch(destroyExpenseStart());

    return deleteExpense(authToken, id)
      .then((response) => {
        response.json().then((json) => {
          if (response.ok) {
            dispatch(destroyExpenseSuccess({ id }));
          } else {
            dispatch(destroyExpenseError(json));
          }
        })
      })
      .catch((error) => dispatch(destroyExpenseError({ message: 'Something went wrong' })));
  };
};