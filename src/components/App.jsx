import React from 'react';
import AppBar from 'material-ui/AppBar';
import ExpensesContainer from './ExpensesContainer';

const App = () => (
  <div>
    <AppBar title="Dude, where's my expenses?" />
    <ExpensesContainer />
  </div>
);

export default App;