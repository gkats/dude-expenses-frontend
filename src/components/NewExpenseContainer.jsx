import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeField, submitForm } from '../actions/newExpense';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import ExpenseForm from './ExpenseForm';

const dateTimeFormat = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
}).format;

const numberFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'eur'
}).format;

const redirectToRoot = () => {
  window.location = "/";
};

const closeButton = () => (
  <IconButton onTouchTap={redirectToRoot}>
    <NavigationClose />
  </IconButton>
);

class NewExpenseContainer extends Component {
  constructor(props) {
    super(props);
    this.formSubmitted = this.formSubmitted.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.success && !this.props.success) {
      redirectToRoot();
    }
  }

  formSubmitted(e) {
    this.props.onFormSubmit(this.props.authToken, this.props.fields);
  }

  saveButton() {
    return (
      <FlatButton label="Save" onTouchTap={this.formSubmitted} />
    );
  }

  render() {
    return (
      <div>
        <AppBar
          title="Add expense"
          iconElementLeft={closeButton()}
          iconElementRight={this.saveButton()}
        />
        <div style={{ margin: '0 auto' }}>
          <ExpenseForm
            onChange={this.props.onFieldChange}
            onSubmit={this.formSubmitted}
            onClose={redirectToRoot}
            dateTimeFormat={dateTimeFormat}
            fields={this.props.fields}
            errors={this.props.errors}
            showActions={false}
            numberFormat={numberFormat}
          />
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  authToken: state.auth.token,
  fields: state.newExpense.get('fields').toJS(),
  errors: state.newExpense.get('errors'),
  success: state.newExpense.get('success')
});

const mapDispatchToProps = (dispatch) => ({
  onFieldChange: (name, value) => dispatch(changeField(name, value)),
  onFormSubmit: (token, data) => dispatch(submitForm(token, data))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewExpenseContainer);