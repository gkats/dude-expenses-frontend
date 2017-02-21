import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchExpenses } from '../actions/expenses';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Link from 'react-router/lib/Link';
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

        <Link to="/expenses/new">
          <FloatingActionButton
            style={{ position: 'fixed', right: '16px', bottom: '16px' }}
          >
            <ContentAdd />
          </FloatingActionButton>
        </Link>
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