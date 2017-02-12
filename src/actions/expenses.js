import { getExpenses } from '../services/expenses';

export const EXPENSES_FETCH = 'EXPENSES_FETCH';
const fetchExpensesStart = () => ({
  type: EXPENSES_FETCH
});

export const EXPENSES_FETCH_SUCCESS = 'EXPENSES_FETCH_SUCCESS';
const fetchExpensesSuccess = (expenses) => ({
  type: EXPENSES_FETCH_SUCCESS,
  expenses
});

export const EXPENSES_FETCH_ERROR = 'EXPENSES_FETCH_ERROR';
const fetchExpensesError = ({ message }) => ({
  type: EXPENSES_FETCH_ERROR,
  error: message
});

export const fetchExpenses = (accessToken) => {
  return function(dispatch) {
    dispatch(fetchExpensesStart());

    return getExpenses(accessToken)
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