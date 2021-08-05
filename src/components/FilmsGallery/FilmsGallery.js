import React from 'react';
import { Link } from 'react-router-dom';
import FilmGalleryItem from './FilmGalleryItem';
import PropTypes from 'prop-types';
import s from "./FilmsGallery.module.css";

const FilmsGallery = ({ films }) => (
    <ul className={s.gallery}>
        {films.map(({ id, poster_path, title, name }) => (
            <li className={s.item} key={id}>
                <Link to={`/movies/${id}`}>
                    <FilmGalleryItem
                    poster={poster_path}
                    filmId={id}
                    title={title ?? name}
                />
                </Link>
            </li>
        ))}
    </ul>
);

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