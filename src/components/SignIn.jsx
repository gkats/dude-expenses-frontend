import React, { Component } from 'react';
import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { changeField, submitForm } from '../actions/signIn';
import Link from 'react-router/lib/Link';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import CloseButton from './CloseButton';
import UserForm from './UserForm';

const redirectToRoot = () => {
  window.location = "/";
};

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.formSubmitted = this.formSubmitted.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.success && nextProps.success) {
      redirectToRoot();
    }
  }

  formSubmitted(e) {
    this.props.onFormSubmit(this.props.fields);
  }

  render() {
    return (
      <div>
        <AppBar
          title="Welcome"
          iconElementLeft={<CloseButton iconStyle={{color: '#fff'}} />}
          iconElementRight={<FlatButton onTouchTap={this.formSubmitted} label="Sign in"/>}
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
              Don't have an account?
              <Link to="/sign_up" style={{marginLeft: '5px', marginRight: '5px', textDecoration: 'none', color: this.props.muiTheme.palette.primary1Color}}>
                Sign up
              </Link>
              now.
            </div>
          </Paper>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  fields: state.signIn.get('fields').toJS(),
  errors: state.signIn.get('errors'),
  success: state.signup.get('success')
});

const mapDispatchToProps = (dispatch) => ({
  onFieldChange: (event, value) => { dispatch(changeField(event.target.name, value)); },
  onFormSubmit: (params) => { dispatch(submitForm(params)) }
});

export default muiThemeable()(connect(mapStateToProps, mapDispatchToProps)(SignIn));