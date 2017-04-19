import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeField, submitForm } from '../actions/newExpense';
import { fetchExpensesTags, fetchExpense } from '../actions/expenses';
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

  componentDidMount() {
    this.props.fetchTags(this.props.authToken);
    if (this.isEditing()) {
      this.props.fetchExpense(this.props.params.id, this.props.authToken);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.success && !this.props.success) {
      redirectToRoot();
    }
  }

  isEditing() {
    return this.props.params.id && this.props.params.id !== 'new';
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
          title={this.isEditing() ? "Edit expense" : "Add expense"}
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
            tagsDataSource={this.props.tags}
          />
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  authToken: state.auth.token,
  fields: state.newExpense.get('fields').toJS(),
  errors: state.newExpense.get('errors').toJS(),
  success: state.newExpense.get('success'),
  tags: state.expenses.get('tags').toJS()
});

const mapDispatchToProps = (dispatch) => ({
  onFieldChange: (name, value) => dispatch(changeField(name, value)),
  onFormSubmit: (token, data) => dispatch(submitForm(token, data)),
  fetchTags: (token) => dispatch(fetchExpensesTags(token)),
  fetchExpense: (id, token) => dispatch(fetchExpense(id, token))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewExpenseContainer);