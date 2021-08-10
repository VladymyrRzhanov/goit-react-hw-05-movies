import React from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ text, type='button', onLoadMore=null }) => (
  <button className={s.button} type={type} onClick={() => onLoadMore()}>
    {text}
  </button>
);

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
