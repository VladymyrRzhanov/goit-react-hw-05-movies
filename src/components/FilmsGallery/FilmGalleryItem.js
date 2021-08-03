import React from 'react';
import PropTypes from 'prop-types';
import s from './FilmsGallery.module.css';

const FilmGalleryItem = ({ filmId, poster, title }) => {
    const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

    return (
        <div className={s.card} id={filmId}>
            <div className={s.container}>
                <img
                    className={s.galleryImage}
                    src={IMAGE_URL + poster}
                    alt={title}
                />
            </div>
            <p className={s.title}>{title}</p>
        </div>
    );
};

FilmGalleryItem.propTypes = {
    filmId: PropTypes.number.isRequired,
    poster: PropTypes.string,
    title: PropTypes.string,
};

export default FilmGalleryItem;
