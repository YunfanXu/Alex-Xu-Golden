import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  return <div>{props.count}</div>;
}

Display.defaultProps = {
  count: 0,
};

Display.propTypes = {
  count: PropTypes.number,
};

export default Display;
