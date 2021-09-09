import Loader from 'react-loader-spinner';
import React from 'react';
import { Load } from "./styles";

const Spinner = () => (
  <Load>
    <Loader
      type="ThreeDots"
      color="#3cb4e7"
      height={100}
      width={100}
      timeout={3000}
    />
  </Load>
);

export default Spinner;
