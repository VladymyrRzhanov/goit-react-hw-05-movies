import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Overlay, CustomModal } from "./styles";

const modalRoot = document.querySelector('#modal');
const body=document.querySelector('body')

const Modal = ({ onClose, index, children }) => {
    useEffect(() => {
        body.classList.add('modal-open')
        console.log(body)
    }, [])

    useEffect(() => {
        const modalClose = e => {
            if (e.code === 'Escape') {
                onClose();
                body.classList.remove('modal-open')
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
            body.classList.remove('modal-open')

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