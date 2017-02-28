import React, { Component } from 'react';
import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { changeField, submitForm } from '../actions/signup';
import { authenticateUser } from '../actions/users';
import Link from 'react-router/lib/Link';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import CloseButton from './CloseButton';
import UserForm from './UserForm';

class SignUp extends Component {
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
      <div>
        <AppBar
          title="New account"
          iconElementLeft={<CloseButton iconStyle={{color: '#fff'}} />}
          iconElementRight={<FlatButton label="Sign up" onTouchTap={this.formSubmitted} />}
        />
        <div style={{maxWidth: '460px', margin: '0 auto'}}>
          <Paper style={{ paddingBottom: '3rem' }}>
            <UserForm
              onChange={this.props.onFieldChange}
              onSubmit={this.formSubmitted}
              fields={this.props.fields}
              errors={this.props.errors}
            />
            <div style={{marginTop: '2rem', textAlign: 'center', fontWeight: '300', fontSize: '16px'}}>
              Already have an account?
              <Link
                to="/sign_in"
                style={{marginLeft: '5px', marginRight: '5px', textDecoration: 'none', color: this.props.muiTheme.palette.primary1Color}}
              >
                Sign in
              </Link>
              instead.
            </div>
          </Paper>
        </div>
      </div>
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

export default muiThemeable()(connect(mapStateToProps, mapDispatchToProps)(SignUp));