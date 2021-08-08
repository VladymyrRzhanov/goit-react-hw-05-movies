import PropTypes from 'prop-types';
import s from "./Modal.module.css";

const ModalImages = ({ modalValue, index }) => {
    const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
    
    return (
        <img className={s.image} src={IMAGE_URL + modalValue} alt={modalValue} />
    );
};

ModalImages.propTypes = {
    modalValue: PropTypes.string.isRequired,
};

export default ModalImages;