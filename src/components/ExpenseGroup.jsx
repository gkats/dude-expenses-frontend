import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import ActionBookmarkBorder from 'material-ui/svg-icons/action/bookmark-border';
import ActionBookmark from 'material-ui/svg-icons/action/bookmark';

function totalPrice(expenses, numFormat) {
  let total = expenses.reduce((sum, expense) => (
    sum + parseInt(expense.price_cents)
  ), 0);
  return numFormat.format(total / 100);
}

class ExpenseGroup extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.clicked = this.clicked.bind(this);
  }

  clicked(e) {
    this.setState({ open: !this.state.open });
  }

  totalPrice() {
    let total = this.props.expenses.reduce((sum, expense) => (
      sum + parseInt(expense.price_cents)
    ), 0);
    return this.formatPrice(total / 100);
  }

  formatPrice(price) {
    return this.props.numFormat.format(price);
  }

  nestedItems() {
    return this.props.expenses.map((expense) => (
      <ListItem key={expense.id}>
        <div>{ expense.tag }</div>
        <div>{ this.formatPrice(expense.price_cents / 100) }</div>
      </ListItem>
    ));
  }

  render() {
    let leftIcon = this.state.open ? <ActionBookmark /> : <ActionBookmarkBorder />;

    return (
      <ListItem
        leftIcon={leftIcon}
        nestedItems={this.nestedItems()}
        open={this.state.open}
        onNestedListToggle={this.clicked}
        onClick={this.clicked}
      >
        <div>{ this.props.date }</div>
        <div>{ this.totalPrice() }</div>
      </ListItem>
    );
  }
};

export default ExpenseGroup;