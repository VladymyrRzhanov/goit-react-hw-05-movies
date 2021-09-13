import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Modal from "../Modal/Modal";
import { Container, Nav, LogoMob, LogoBig, BtnAuth } from "./styles";
import AuthModal from '../Modal/AuthModal';
import Filter from '../Filter';

const Navigation = () => {
    const [modalShow, setModalShow] = useState(false);

    const toggleModal = () => {
        setModalShow(!modalShow);
    };

    return (
        <Container>
            <Link to='/'>
                <LogoMob />
                <LogoBig />
            </Link>
            <Filter />
            <Nav>
                <BtnAuth type='button' onClick={toggleModal}>
                    Authentication
                </BtnAuth>
                {modalShow &&
                    <Modal
                        onClose={toggleModal}
                    >
                        <AuthModal
                        />
                    </Modal>
                }

            </Nav>
        </Container>
    );
}

export default Navigation;