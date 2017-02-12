import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppTheme from '../theme';
import App from './App';
import Landing from './Landing';

class AppContainer extends React.Component {
  render() {
    let view = null;
    if (this.props.authToken) {
      view = <App />;
    } else {
      view = <Landing />;
    }

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(AppTheme)}>
        { view }
      </MuiThemeProvider>
    );

  }
};

const mapStateToProps = (state) => ({
  authToken: state.auth.token
});

export default connect(mapStateToProps)(AppContainer);