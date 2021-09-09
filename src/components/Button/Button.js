import React from 'react';
import PropTypes from 'prop-types';
import { BtnLoad } from "./styles";

const Button = ({ text, type='button', onLoadMore=null }) => (
  <BtnLoad type={type} onClick={() => onLoadMore()}>
    {text}
  </BtnLoad>
);

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
