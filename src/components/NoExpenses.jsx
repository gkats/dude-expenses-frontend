import React, { PropTypes } from 'react';
import ActionReceipt from 'material-ui/svg-icons/action/receipt';

const NoExpenses = ({ color }) => (
  <div style={{marginTop: '20px', marginTop: '80px', color}}>
    <div style={{maxWidth: '256px', margin: '0 auto'}}>
    <ActionReceipt style={{width: '256px', height: '256px', fill: color}}/>
    </div>
    <div style={{maxWidth: '380px', fontSize: '20px', fontFamily: 'Roboto, sans', textAlign: 'center'}}>
      Start adding expenses and they'll appear here.
    </div>
  </div>
);

NoExpenses.propTypes = {
  color: PropTypes.string
};

NoExpenses.defaultProps = {
  color: ''
};

export default NoExpenses;
