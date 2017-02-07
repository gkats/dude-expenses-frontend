import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import ExpensesContainer from './ExpensesContainer';

const App = () => (
  <MuiThemeProvider>
    <div>
      <AppBar title="Dude, where's my expenses?" />
      <ExpensesContainer />
    </div>
  </MuiThemeProvider>
);

export default App;