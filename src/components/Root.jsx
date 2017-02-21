import React from 'react';
import { Provider } from 'react-redux';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import Router from 'react-router/lib/Router';
import browserHistory from 'react-router/lib/browserHistory';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppTheme from '../theme';
import AppContainer from './AppContainer';
import NewExpenseContainer from './NewExpenseContainer';

const MuiThemed = (props) => (
  <MuiThemeProvider muiTheme={getMuiTheme(AppTheme)}>
    { props.children }
  </MuiThemeProvider>
);

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={MuiThemed}>
        <IndexRoute component={AppContainer} />
        <Route path="expenses/new" component={NewExpenseContainer} />
      </Route>
    </Router>
  </Provider>
);

export default Root;