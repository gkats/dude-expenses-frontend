import React from 'react';
import { connect } from 'react-redux';
import App from './App';
import Landing from './Landing';

const AppContainer = (props) => (
  props.authToken ? <App /> : <Landing />
);

const mapStateToProps = (state) => ({
  authToken: state.auth.token
});

export default connect(mapStateToProps)(AppContainer);