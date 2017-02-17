import React from 'react';
import AppBar from 'material-ui/AppBar';
import ExpensesContainer from './ExpensesContainer';

const App = () => (
  <div>
    <AppBar title="Dude, where's my expenses?" />
    <div>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <ExpensesContainer />
      </div>
    </div>
  </div>
);

export default App;