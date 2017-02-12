import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeField, submitForm } from '../actions/signup';
import { authenticateUser } from '../actions/users';
import SignUp from './SignUp';

class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.formSubmitted = this.formSubmitted.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!Object.keys(this.props.user).length && Object.keys(nextProps.user).length) {
      this.props.onSignUpSuccess(this.props.fields);
    }
  }

  formSubmitted(e) {
    this.props.onFormSubmit(this.props.fields);
  }

  render() {
    return (
      <SignUp
        onChange={this.props.onFieldChange}
        onSubmit={this.formSubmitted}
        fields={this.props.fields}
        errors={this.props.errors}
      />
    );
  }
};

const mapStateToProps = (state) => ({
  fields: state.signup.get('fields').toJS(),
  errors: state.signup.get('errors'),
  user: state.users.get('user').toJS()
});

const mapDispatchToProps = (dispatch) =>({
  onFieldChange: (event, value) => { dispatch(changeField(event.target.name, value)); },
  onFormSubmit: (params) => { dispatch(submitForm(params)) },
  onSignUpSuccess: (params) => { dispatch(authenticateUser(params)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);