import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import slugify from "slugify";
import PropTypes from 'prop-types';
import s from './FilmsGallery.module.css';
import oskar from '../../images/oskar.jpg'

const FilmGalleryItem = ({ id, filmId, poster, title }) => {
    const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
    const location = useLocation();
    const foto = poster === null ? oskar : `${IMAGE_URL}${poster}`;
    
    return (
        <li className={s.item}>
            <Link className={s.link}
                to={{
                    pathname: `/movies/${slugify(`${title} ${id}`, { lower: true, strict: true })}`,
                    state: { from: location }
                }}>
                <div className={s.card} id={filmId}>
                    <div className={s.container}>
                        <img
                            className={s.galleryImage}
                            src={foto}
                            alt={title}
                        />
                    </div>
                    <p className={s.title}>{title}</p>
                </div>
            </Link>
        </li>
    );
};

FilmGalleryItem.propTypes = {
    filmId: PropTypes.number.isRequired,
    poster: PropTypes.string,
    title: PropTypes.string,
};

export default FilmGalleryItem;
