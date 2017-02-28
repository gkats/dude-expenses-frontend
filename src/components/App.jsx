import React from 'react';
import { connect } from 'react-redux';
import ExpensesContainer from './ExpensesContainer';
import Landing from './Landing';

const App = (props) => (
  props.authToken ? <ExpensesContainer /> : <Landing />
);

const mapStateToProps = (state) => ({
  authToken: state.auth.token
});

export default connect(mapStateToProps)(App);