import Loader from 'react-loader-spinner';
import React from 'react';
import s from "./Loader.module.css";

const Spinner = () => (
  <div className={s.loader}>
    <Loader
    type="ThreeDots"
    color="#3f51b5"
    height={100}
    width={100}
    timeout={3000}
  />
  </div>
);

export default Spinner;
