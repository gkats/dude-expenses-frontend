import React from 'react';
import { List } from 'material-ui/List';
import Expense from './Expense';

function renderExpense(expense) {
  return
};

const ExpensesList = (props) => (
  <List>
    {
      props.expenses.map(expense => (
        <Expense
          key={expense.id}
          priceCents={expense.price_cents}
          tag={expense.tag}
          date={expense.date}
          notes={expense.notes}
        />
      ))
    }
  </List>
);

export default ExpensesList;