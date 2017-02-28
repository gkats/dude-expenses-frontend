import React, { PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

const redirectToRoot = () => {
  window.location = "/";
};

const CloseButton = ({ onClick, iconStyle }) => (
  <IconButton onTouchTap={onClick} iconStyle={iconStyle}>
    <NavigationClose />
  </IconButton>
);

CloseButton.propTypes = {
  onClick: PropTypes.func,
  iconStyle: PropTypes.object
};

CloseButton.defaultProps = {
  onClick: redirectToRoot,
  iconStyle: {}
};

export default CloseButton;
