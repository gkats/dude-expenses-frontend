import React, { Component, PropTypes } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import ActionBookmark from 'material-ui/svg-icons/action/bookmark';
import { ListItem, List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { Card, CardTitle } from 'material-ui/Card';

const tagStyle = {
  display: 'inline-block',
  position: 'absolute',
  left: '22px'
};
const priceStyle = {
  display: 'inline-block',
  position: 'absolute',
  right: '6px',
  textAlign: 'right',
  fontWeight: '600'
};

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
      sum + parseInt(expense.priceCents)
    ), 0);
    return this.formatPrice(total / 100);
  }

  formatPrice(price) {
    return this.props.numberFormat(price);
  }

  muiPalette() {
    return this.props.muiTheme.palette;
  }

  leftIcon() {
    const palette = this.muiPalette();
    return (
      <ActionBookmark
        color={this.state.open ? palette.primary2Color : palette.primary3Color}
        style={{ position: 'absolute', top: '-16px' }}
      />
    );
  }

  groupTitle() {
    let fontWeight = this.state.open ? '600' : '';
    let color = this.state.open ? '' : this.muiPalette().primary3Color;
    const iconStyle = {
      position: 'absolute',
      left: '6px',
      display: 'inline-block'
    };
    const primaryStyle = {
      marginLeft: '26px',
      display: 'inline-block',
      fontWeight,
      color
    };
    const secondaryStyle = {
      position: 'absolute',
      right: '6px',
      display: 'inline-block',
      textAlign: 'right',
      fontWeight,
      color
    };

    return (
      <div style={{ fontSize: '21px' }}>
        <div style={iconStyle}>
          { this.leftIcon() }
        </div>
        <div style={primaryStyle}>
          { this.props.date }
        </div>
        <div style={secondaryStyle}>
          { this.totalPrice() }
        </div>
      </div>
    );
  }

  renderNestedGroup() {
    return (
      <div>
        <Divider />
        <List>
          { this.props.expenses.map(expense => this.renderNestedItem(expense)) }
        </List>
      </div>
    );
  }

  renderNestedItem(item) {
    return (
      <ListItem key={item.id} innerDivStyle={{paddingLeft: '6px', paddingRight: '6px'}}>
        <div style={tagStyle}>
          { item.tag }
        </div>
        <div style={priceStyle}>
          { this.formatPrice(item.priceCents / 100) }
        </div>
      </ListItem>
    );
  }

  render() {
    return (
      <div style={{padding: '6px'}}>
        <Card onClick={this.clicked}>
          <ListItem innerDivStyle={{padding: '6px'}}>
            <CardTitle title={this.groupTitle()} style={{ padding: '6px' }} />
            { this.state.open ? this.renderNestedGroup() : null }
          </ListItem>
        </Card>
      </div>
    );
  }
};

ExpenseGroup.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  date: PropTypes.string.isRequired,
  numberFormat: PropTypes.func.isRequired,
  muiTheme: PropTypes.object.isRequired
};

export default muiThemeable()(ExpenseGroup);