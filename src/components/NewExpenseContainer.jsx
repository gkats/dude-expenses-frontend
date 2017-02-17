import React, { Component } from 'react';
import { connect } from 'react-redux';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { changeField, submitForm, addClick, cancelClick } from '../actions/newExpense';
import ExpenseForm from './ExpenseForm';

const dateTimeFormat = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
}).format;

class NewExpenseContainer extends Component {
  constructor(props) {
    super(props);
    this.formSubmitted = this.formSubmitted.bind(this);
  }

  formSubmitted(e) {
    this.props.onFormSubmit(this.props.authToken, this.props.fields);
  }

  render() {
    return (
      <div>
        <FloatingActionButton
          onTouchTap={this.props.onAddClick}
          style={{ position: 'fixed', right: '16px', bottom: '16px' }}
        >
          <ContentAdd />
        </FloatingActionButton>
        <ExpenseForm
          onChange={this.props.onFieldChange}
          onSubmit={this.formSubmitted}
          onClose={this.props.onFormClose}
          visible={this.props.showForm}
          dateTimeFormat={dateTimeFormat}
          fields={this.props.fields}
          errors={this.props.errors}
        />
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  authToken: state.auth.token,
  fields: state.newExpense.get('fields').toJS(),
  errors: state.newExpense.get('errors'),
  showForm: state.newExpense.get('isVisible')
});

const mapDispatchToProps = (dispatch) => ({
  onFieldChange: (name, value) => dispatch(changeField(name, value)),
  onFormSubmit: (token, data) => dispatch(submitForm(token, data)),
  onAddClick: () => dispatch(addClick()),
  onFormClose: () => dispatch(cancelClick())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewExpenseContainer);