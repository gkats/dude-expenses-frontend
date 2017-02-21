import React, { PropTypes } from 'react';
import ActionReceipt from 'material-ui/svg-icons/action/receipt';

const NoExpenses = ({ color }) => (
  <div style={{ maxWidth: '256px', margin: '0 auto', marginTop: '20px', marginTop: '80px', color }}>
    <ActionReceipt style={{width: '256px', height: '256px', fill: color}}/>
    <div style={{ fontSize: '24px' }}>
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
