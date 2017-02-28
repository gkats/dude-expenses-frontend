import React from 'react';
import Link from 'react-router/lib/Link';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import SignIn from './SignIn';

const SignInLink = () => (
  <div style={{display: 'inline-block', boxSizing: 'border-box', margin: '7px 0px 0px'}}>
    <Link to="/sign_in">
      <FlatButton label="Sign in" style={{color: '#fff'}}/>
    </Link>
  </div>
);

const Landing = () => (
  <div>
    <AppBar
      iconElementRight={<SignInLink />}
    />
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      <div style={{marginTop: '80px'}}>
        <div style={{textAlign: 'center'}}>
          <h1>Dude, what did I spend last night?</h1>
          <div>
            <Link to="/sign_up">
              <RaisedButton label="Get started" primary={true} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Landing;