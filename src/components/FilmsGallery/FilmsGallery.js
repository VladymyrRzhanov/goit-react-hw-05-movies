import React from 'react';
import { Link } from 'react-router-dom'
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

// FilmsGallery.propTypes = {
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       imageId: PropTypes.number.isRequired,
//       smallImg: PropTypes.string.isRequired,
//       modalImg: PropTypes.string.isRequired,
//       tags: PropTypes.string.isRequired,
//     }).isRequired,
//   ).isRequired,
//   onModalOpen: PropTypes.func.isRequired,
// };

export default FilmsGallery;