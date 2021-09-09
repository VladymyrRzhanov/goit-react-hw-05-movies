import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Overlay, CustomModal } from "./styles";

const modalRoot = document.querySelector('#modal');

const Modal = ({ onClose, index, children }) => {
    useEffect(() => {
        const modalClose = e => {
            if (e.code === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', modalClose);
        return () => {
            window.removeEventListener('keydown', modalClose);
        };
    });

    const handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    };

    return createPortal(
        <Overlay onClick={handleBackdropClick}>
            <CustomModal>
                {children}
            </CustomModal>
        </Overlay>,
        modalRoot,
    );
};

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node,
};

export default Modal;