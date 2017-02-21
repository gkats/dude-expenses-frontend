import React from 'react';
import AppBar from 'material-ui/AppBar';
import ExpensesContainer from './ExpensesContainer';

const App = () => (
  <div>
    <AppBar title="All expenses" />
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      <ExpensesContainer />
    </div>
  </div>
);

export default App;