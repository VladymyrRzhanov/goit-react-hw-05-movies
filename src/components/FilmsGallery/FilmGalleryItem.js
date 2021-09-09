import React from 'react';
import { useLocation } from 'react-router-dom';
import slugify from "slugify";
import PropTypes from 'prop-types';
import oskar from '../../images/oskar.jpg'
import { FilmLink, Item, Card, Container, GalleryImage, Title } from "./styles";

const FilmGalleryItem = ({ id, filmId, poster, title }) => {
    const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
    const location = useLocation();
    const foto = poster === null ? oskar : `${IMAGE_URL}${poster}`;
    
    return (
        <Item>
            <FilmLink
                to={{
                    pathname: `/movies/${slugify(`${title} ${id}`, { lower: true, strict: true })}`,
                    state: { from: location }
                }}>
                <Card id={filmId}>
                    <Container>
                        <GalleryImage
                            src={foto}
                            alt={title}
                        />
                    </Container>
                    <Title>{title}</Title>
                </Card>
            </FilmLink>
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
