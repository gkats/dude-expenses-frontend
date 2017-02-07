import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ExpensesList from './ExpensesList';

const expenses = [
  {
    id: 1,
    price_cents: '2000',
    date: '2017-01-01T08:50:00Z',
    tag: 'food'
  },

  {
    id: 2,
    price_cents: '2500',
    date: '2017-01-01T18:50:00Z',
    tag: 'drinks'
  },

  {
    id: 3,
    price_cents: '1550',
    date: '2017-01-10T08:50:00Z',
    tag: 'food'
  },

  {
    id: 4,
    price_cents: '4000',
    date: '2017-01-07T11:00:00Z',
    tag: 'gas'
  }
];

class ExpensesContainer extends Component {
  constructor(props) {
    super(props);
    this.btnClicked = this.btnClicked.bind(this);
  }

  btnClicked(e) {
    e.preventDefault();
    console.log('show form')
  }

  render() {
    return (
      <div>
        <ExpensesList expenses={expenses} />
        <FloatingActionButton onClick={this.btnClicked}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
};

export default ExpensesContainer;