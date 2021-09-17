import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FavViewBtn from "../FavViewBtn";
import slugify from "slugify";
import PropTypes from 'prop-types';
import oskar from '../../images/oskar.jpg';
import { getIsLoggeIn } from "../../redux/authUser/authUser-selector";
import { FilmLink, Item, Container, GalleryImage } from "./styles";

const FilmGalleryItem = ({ id, filmId, poster, title }) => {
    const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
    const location = useLocation();
    const isLoggeIn = useSelector(getIsLoggeIn);
    const foto = poster === null ? oskar : `${IMAGE_URL}${poster}`;
    
    return (
        <Item>
            <Container>
                <FilmLink id={filmId}
                    to={{
                        pathname: `/movies/${slugify(`${title} ${id}`, { lower: true, strict: true })}`,
                        state: { from: location }
                    }}>
                    <GalleryImage
                        src={foto}
                        alt={title}
                    />
                </FilmLink>
                {isLoggeIn && (
                    <FavViewBtn movieId={filmId}/>
                )}
            </Container>
        </Item>
    );
};

FilmGalleryItem.propTypes = {
    id: PropTypes.number.isRequired,
    filmId: PropTypes.number.isRequired,
    poster: PropTypes.string,
    title: PropTypes.string,
};

export default FilmGalleryItem;
