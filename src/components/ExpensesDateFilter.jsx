import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import fecha from 'fecha';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { fetchExpenses } from '../actions/expenses';
import IconButton from 'material-ui/IconButton';
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import ArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';

class ExpensesDateFilter extends Component {
  constructor(props) {
    super(props);
    const now = new Date();
    this.state = { month: now.getMonth(), year: now.getFullYear() };
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
  }

  componentDidMount() {
    this.loadExpenses();
  }

  componentDidUpdate(prevProps, prevState) {
    this.loadExpenses();
  }

  increment(e) {
    this.setState({ month: this.state.month + 1 });
  }

  decrement(e) {
    this.setState({ month: this.state.month - 1 });
  }

  loadExpenses() {
    this.props.apply(this.props.authToken, this.filter());
  }

  filter() {
    return {
      from: this.current().toISOString(),
      to: this.next().toISOString()
    };
  }

  current() {
    return new Date(this.state.year, this.state.month);
  }

  next() {
    return new Date(this.state.year, this.state.month + 1, 0, 23, 59, 59);
  }

  palette() {
    return this.props.muiTheme.palette;
  }

  render() {
    const color = this.props.muiTheme.palette.primary3Color;
    return (
      <div style={{color}}>
        <IconButton
          onTouchTap={this.decrement}
          iconStyle={{color}}
          style={{padding: '0', width: '24px'}}
        >
          <ArrowLeft />
        </IconButton>

        <div style={{display: 'inline-block', verticalAlign: 'super', fontFamily: 'Roboto, sans-serif'}}>
          { fecha.format(this.current(), 'MMM, YYYY') }
        </div>

        <IconButton
          onTouchTap={this.increment}
          iconStyle={{color}}
          style={{padding: '0', width: '24px'}}
        >
          <ArrowRight />
        </IconButton>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  authToken: state.auth.token
});

const mapDispatchToProps = (dispatch) => ({
  apply: (token, params) => dispatch(fetchExpenses(token, params))
});

export default muiThemeable()(connect(mapStateToProps, mapDispatchToProps)(ExpensesDateFilter));