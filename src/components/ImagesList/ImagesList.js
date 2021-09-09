import PropTypes from 'prop-types';
import { Gallery, Item, Card } from "./styles";

const ImagesList = ({ images, onModalOpen }) => {
    const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

    if (images.length === 0) {
        return <h2>Sorry, we have no image</h2>
    }

    return (
        <Gallery>
            {images.map(({ file_path }, index) =>
                <Item
                    onClick={()=>onModalOpen(file_path,index)}
                    key={file_path}>
                    <Card
                        src={IMAGE_URL + file_path}
                        id={index}
                        alt={file_path}
                    />
                </Item>
            )}
        </Gallery>
    );
};

ImagesList.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        file_path: PropTypes.string,
    })),
    onModalOpen: PropTypes.func.isRequired,
};

export default ImagesList;