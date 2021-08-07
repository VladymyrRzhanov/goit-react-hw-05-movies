import React from 'react';
import FilmGalleryItem from './FilmGalleryItem';
import PropTypes from 'prop-types';
import s from "./FilmsGallery.module.css";

const FilmsGallery = ({ films }) => {
    return (
        <ul className={s.gallery}>
            {films.map(({ id, poster_path, title, name }) => (
                <FilmGalleryItem
                    key={id}
                    id={id}
                    poster={poster_path}
                    filmId={id}
                    title={title ?? name}
                />
                
            ))}
        </ul>
    );
}

FilmsGallery.propTypes = {
    films: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            poster_path: PropTypes.string,
            title: PropTypes.string,
            name: PropTypes.string,
        }).isRequired,
    ).isRequired,
};

export default FilmsGallery;