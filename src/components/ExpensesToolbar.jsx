import React, { PropTypes } from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';

const total = (expenses) => (
  expenses.reduce((sum, expense) => (parseInt(expense.priceCents) + sum), 0)
);

const ExpensesToolbar = ({ expenses, numberFormat }) => (
  <Toolbar>
    <ToolbarGroup>
      <ToolbarTitle text={`Total: ${numberFormat(total(expenses) / 100)}`} />
    </ToolbarGroup>
  </Toolbar>
);

export default ExpensesToolbar;