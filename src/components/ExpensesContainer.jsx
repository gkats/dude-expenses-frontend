import React, { Component } from 'react';
import { connect } from 'react-redux';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { fetchExpenses } from '../actions/expenses';
import ExpensesList from './ExpensesList';
import ExpenseForm from './ExpenseForm';

const numberFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'usd'
}).format;
const dateTimeFormat = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
}).format;

class ExpensesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { showForm: false };
    this.buttonClicked = this.buttonClicked.bind(this);
    this.formClosed = this.formClosed.bind(this);
    this.formSubmitted = this.formSubmitted.bind(this);
  }

  componentDidMount() {
    this.props.onMount(this.props.accessToken);
  }

  buttonClicked(e) {
    this.setState({ showForm: true });
  }

  formClosed(e) {
    this.setState({ showForm: false });
  }

  formSubmitted(e) {
    console.log('form submitted')
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
        <FloatingActionButton onTouchTap={this.buttonClicked}>
          <ContentAdd />
        </FloatingActionButton>
        <ExpenseForm
          visible={this.state.showForm}
          onSubmit={this.formSubmitted}
          onClose={this.formClosed}
          numberFormat={numberFormat}
          dateTimeFormat={dateTimeFormat}
        />
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  expenses: state.expenses.get('expenses').toJS(),
  accessToken: state.auth.token
});

const mapDispatchToProps = (dispatch) => ({
  onMount: (token) => (dispatch(fetchExpenses(token)))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesContainer);