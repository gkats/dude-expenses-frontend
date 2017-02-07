import React from 'react';
import fecha from 'fecha';
import { List } from 'material-ui/List';
import ExpenseGroup from './ExpenseGroup';

function sortByDate(a, b) {
  if (a.date > b.date) {
    return 1;
  } else if (a.date < b.date) {
    return -1;
  }
  return 0;
}

function groupByDate(expenses) {
  return expenses.sort(sortByDate).reduce((grouped, expense) => {
    let date = fecha.format(new Date(expense.date), 'mediumDate');
    grouped[date] = grouped[date] || [];
    grouped[date].push(expense);
    return grouped;
  }, {});
};

const ExpensesList = (props) => {
  let grouped = groupByDate(props.expenses);
  let numFormat = Intl.NumberFormat(props.locale, {
    style: 'currency',
    currency: props.currency
  });

  return (
    <List>
      {
        Object.keys(grouped).map(date => (
          <ExpenseGroup
            key={date}
            date={date}
            expenses={grouped[date]}
            numFormat={numFormat}
          />
        ))
      }
    </List>
  );
};

export default ExpensesList;