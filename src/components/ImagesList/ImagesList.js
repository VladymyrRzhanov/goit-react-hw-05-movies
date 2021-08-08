import PropTypes from 'prop-types';
import s from "./ImagesList.module.css";

const ImagesList = ({ images, onModalOpen }) => {
    const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

    if (images.length === 0) {
        return <h2>Sorry, we have no image</h2>
    }

    return (
        <ul className={s.gallery}>
            {images.map(({ file_path }, index) =>
                <li
                    onClick={()=>onModalOpen(file_path,index)}
                    className={s.item}
                    key={file_path}>
                    <img
                        className={s.card}
                        src={IMAGE_URL + file_path}
                        id={index}
                        alt={file_path}
                    />
                </li>
            )}
        </ul>
    );
};

ImagesList.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        file_path: PropTypes.string,
    })),
    onModalOpen: PropTypes.func.isRequired,
};

export default ImagesList;