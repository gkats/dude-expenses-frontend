import React, { PropTypes } from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import ExpensesDateFilter from './ExpensesDateFilter';

const total = (expenses) => (
  expenses.reduce((sum, expense) => (parseInt(expense.priceCents) + sum), 0)
);

const ExpensesToolbar = ({ expenses, numberFormat }) => (
  <Toolbar>
    <ToolbarGroup>
      <ToolbarTitle text={`Total: ${numberFormat(total(expenses) / 100)}`} />
    </ToolbarGroup>
    <ToolbarGroup>
      <ExpensesDateFilter />
    </ToolbarGroup>
  </Toolbar>
);

ExpensesToolbar.PropTypes = {
  numberFormat: PropTypes.func.isRequired,
  expenses: PropTypes.array
};

ExpensesToolbar.defaultProps = {
  expenses: []
};

export default ExpensesToolbar;