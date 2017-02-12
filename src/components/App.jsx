import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import AppTheme from '../theme';
import ExpensesContainer from './ExpensesContainer';

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(AppTheme)}>
    <div>
      <AppBar title="Dude, where's my expenses?" />
      <ExpensesContainer />
    </div>
  </MuiThemeProvider>
);

export default App;