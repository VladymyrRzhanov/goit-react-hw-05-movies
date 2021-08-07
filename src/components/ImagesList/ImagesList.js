import s from "./ImagesList.module.css";

const ImagesList = ({ images, onModalOpen }) => {
    const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

    if (images.length === 0) {
        return <h2>Sorry, we have no image</h2>
    }

    return (
        <ul className={s.gallery}>
            {images.map(({ file_path }) =>
                <li
                    className={s.item}
                    key={file_path}>
                    <img
                        className={s.card}
                        src={IMAGE_URL + file_path}
                        alt={file_path}
                        onClick={()=>onModalOpen(file_path)}
                    />
                </li>
            )}
        </ul>
    );
};

export default ImagesList;