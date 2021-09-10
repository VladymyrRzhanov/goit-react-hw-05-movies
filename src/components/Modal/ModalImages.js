import PropTypes from 'prop-types';
import { Image } from "./styles";

const ModalImages = ({ modalValue, index }) => {
    const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
    
    return (
        <Image src={IMAGE_URL + modalValue} alt={modalValue} />
    );
};

ModalImages.propTypes = {
    modalValue: PropTypes.string.isRequired,
};

export default ModalImages;