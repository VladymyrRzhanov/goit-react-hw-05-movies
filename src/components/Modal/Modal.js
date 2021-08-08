import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

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
        <div className={s.overlay} onClick={handleBackdropClick}>
            <div className={s.modal}>
                {children}
            </div>
        </div>,
        modalRoot,
    );
};

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node,
};

export default Modal;