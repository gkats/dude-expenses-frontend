import React from 'react';
import { ListItem } from 'material-ui/List';

const Expense = (props) => (
  <ListItem key={props.id}>
    Paid {props.priceCents} for {props.tag} on {props.date}
  </ListItem>
);

export default Expense;