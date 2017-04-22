import React, { Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { connect } from 'react-redux';
import { changeField, submitForm } from '../actions/newExpense';
import { fetchExpensesTags, fetchExpense, destroyExpense } from '../actions/expenses';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Delete from 'material-ui/svg-icons/action/delete';
import Paper from 'material-ui/Paper';
import ActionBookmark from 'material-ui/svg-icons/action/bookmark';
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
    this.deleteClicked = this.deleteClicked.bind(this);
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

  deleteClicked(e) {
    if (confirm("Hey, if you delete this there's no turning back.")) {
      this.props.onDeleteClick(this.props.authToken, this.props.fields.id);
    }
  }

  saveButton() {
    return (
      <FlatButton label="Save" onTouchTap={this.formSubmitted} />
    );
  }

  deleteButton() {
    let view = null;

    if (this.isEditing()) {
      view = (
        <IconButton
          onTouchTap={this.deleteClicked}
          style={{float: 'right'}}
          iconStyle={{color: this.props.muiTheme.palette.primary3Color}}
        >
          <Delete />
        </IconButton>
      );
    }
    return view;
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
          <div style={{padding: '1rem', maxWidth: '460px', margin: '0 auto'}}>
            <Paper style={{paddingBottom: '4rem'}}>
              <div style={{position: 'relative'}}>
                <ActionBookmark style={{ position: 'absolute', top: '-8px', color: this.props.muiTheme.palette.primary2Color }} />
              </div>

              { this.deleteButton() }
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
            </Paper>
          </div>
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
  onDeleteClick: (token, id) => dispatch(destroyExpense(token, id)),
  fetchTags: (token) => dispatch(fetchExpensesTags(token)),
  fetchExpense: (id, token) => dispatch(fetchExpense(id, token))
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(muiThemeable()(NewExpenseContainer));