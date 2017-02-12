import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeField, submitForm } from '../actions/signIn';
import UserForm from './UserForm';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.formSubmitted = this.formSubmitted.bind(this);
  }

  formSubmitted(e) {
    this.props.onFormSubmit(this.props.fields);
  }

  render() {
    return (
      <UserForm
        onChange={this.props.onFieldChange}
        onSubmit={this.formSubmitted}
        fields={this.props.fields}
        errors={this.props.errors}
        buttonLabel="Sign in"
      />
    );
  }
};

const mapStateToProps = (state) => ({
  fields: state.signIn.get('fields').toJS(),
  errors: state.signIn.get('errors')
});

const mapDispatchToProps = (dispatch) => ({
  onFieldChange: (event, value) => { dispatch(changeField(event.target.name, value)); },
  onFormSubmit: (params) => { dispatch(submitForm(params)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);