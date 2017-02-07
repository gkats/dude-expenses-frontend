import React from 'react';
import { ListItem } from 'material-ui/List';
import ActionBookmarkBorder from 'material-ui/svg-icons/action/bookmark-border';

function totalPrice(expenses, numFormat) {
  let total = expenses.reduce((sum, expense) => (
    sum + parseInt(expense.price_cents)
  ), 0);
  return numFormat.format(total / 100);
}

const ExpenseGroup = (props) => (
  <ListItem leftIcon={<ActionBookmarkBorder />}>
    <div>{props.date}</div>
    <div>{ totalPrice(props.expenses, props.numFormat) }</div>
  </ListItem>
);

export default ExpenseGroup;