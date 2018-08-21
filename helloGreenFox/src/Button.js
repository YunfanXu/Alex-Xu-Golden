import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  console.log(props);
  return (
    <button type="button" onClick={props.func}>{props.name}</button>
  );
};

Button.defaultProps = {
  name: '',
  func: () => { console.log('Default'); },
};

Button.propTypes = {
  name: PropTypes.string,
  func: PropTypes.func,
};

export default Button;
