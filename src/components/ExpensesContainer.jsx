import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchExpenses } from '../actions/expenses';
import muiThemeable from 'material-ui/styles/muiThemeable';
import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Link from 'react-router/lib/Link';
import ExpensesList from './ExpensesList';
import NoExpenses from './NoExpenses';
import ExpensesToolbar from './ExpensesToolbar';

const numberFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'eur'
}).format;

class ExpensesContainer extends Component {
  hasExpenses() {
    return this.props.expenses && this.props.expenses.length;
  }

  renderNoExpenses() {
    return (
      <NoExpenses color={this.props.muiTheme.palette.disabledColor} />
    );
  }

  renderExpensesList() {
    return (
      <ExpensesList
        expenses={this.props.expenses}
        numberFormat={numberFormat}
      />
    );
  }

  render() {
    return (

      <div>
        <AppBar title="All expenses" />
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <ExpensesToolbar
            expenses={this.props.expenses}
            numberFormat={numberFormat}
          />
          { this.hasExpenses() ? this.renderExpensesList() : this.renderNoExpenses() }

          <Link to="/expenses/new">
            <FloatingActionButton
              style={{ position: 'fixed', right: '16px', bottom: '16px' }}
            >
              <ContentAdd />
            </FloatingActionButton>
          </Link>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  expenses: state.expenses.get('records').toJS()
});

export default muiThemeable()(connect(mapStateToProps)(ExpensesContainer));