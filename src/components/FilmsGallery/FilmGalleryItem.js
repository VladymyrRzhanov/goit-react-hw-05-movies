import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import slugify from "slugify";
import PropTypes from 'prop-types';
import oskar from '../../images/oskar.jpg';
import { getIsLoggeIn } from "../../redux/authUser/authUser-selector";
import * as favFilmsActions from "../../redux/favFilms/favFilms-actions";
import { FilmLink, Item, Container, GalleryImage, BtnContainer, Favorite, Viewed, BtnLib } from "./styles";

const FilmGalleryItem = ({ id, filmId, poster, title }) => {
    const dispatch = useDispatch()
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
                    <BtnContainer>
                        <BtnLib onClick={() => dispatch(favFilmsActions.addFavFilms(id))}><Favorite /></BtnLib>
                        <BtnLib onClick={() => console.log(`viewed ${id}`)}><Viewed /></BtnLib>
                    </BtnContainer>
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
