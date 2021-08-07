import s from "./ImagesList.module.css";

const ImagesList = ({ images }) => {
    const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

    if (images.length === 0) {
        return <h2>We don't have any image</h2>
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
                    />
                </li>
            )}
        </ul>
    );
};

export default ImagesList;