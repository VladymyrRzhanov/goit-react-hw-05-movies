import React, { useState } from 'react';
import AuthModal from '../Modal/AuthModal';
import Modal from "../Modal/Modal";
import { BtnAuth } from "./styles";


const Auth = () => {
  const [modalShow, setModalShow] = useState(false);
   

    const toggleModal = () => {
        setModalShow(!modalShow);
    };
  return (
    <>
    <BtnAuth type='button' onClick={toggleModal}>
      authorization
    </BtnAuth>
    {modalShow &&
      <Modal
        onClose={toggleModal}
      >
        <AuthModal onClose={toggleModal}
        />
      </Modal>
    }
  </>
  )
};

export default Auth;