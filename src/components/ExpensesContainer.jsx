import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchExpenses } from '../actions/expenses';
import ExpensesList from './ExpensesList';
import NewExpenseContainer from './NewExpenseContainer';

const numberFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'usd'
}).format;

class ExpensesContainer extends Component {
  componentDidMount() {
    this.props.onMount(this.props.authToken);
  }

  hasExpenses() {
    return this.props.expenses && this.props.expenses.length;
  }

  renderBlankSlate() {
    return <div>You don't have any expenses. Start adding now!</div>;
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
        { this.hasExpenses() ? this.renderExpensesList() : this.renderBlankSlate() }
        <NewExpenseContainer />
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  expenses: state.expenses.get('records').toJS(),
  authToken: state.auth.token
});

const mapDispatchToProps = (dispatch) => ({
  onMount: (token) => dispatch(fetchExpenses(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesContainer);