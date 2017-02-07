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
  },

  {
    id: 5,
    price_cents: '3200',
    date: '2017-01-19T15:38:20Z',
    tag: 'gas'
  },

  {
    id: 6,
    price_cents: '0850',
    date: '2017-01-07T13:00:00Z',
    tag: 'food'
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
        <ExpensesList expenses={expenses} locale="en-US" currency="usd" />
        <FloatingActionButton onClick={this.btnClicked}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
};

export default ExpensesContainer;