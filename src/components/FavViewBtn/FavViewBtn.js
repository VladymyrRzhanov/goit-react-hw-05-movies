import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import PropTypes from 'prop-types'
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
// import Favorite from '@mui/icons-material/Favorite';
// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// import BookmarkIcon from '@mui/icons-material/Bookmark';
import * as favFilmsActions from "../../redux/favFilms/favFilms-actions";
import { Container, FavoriteBtn, Viewed, FavoriteBtnChecked, ViewedChecked } from "./styles";
import { useDispatch } from 'react-redux';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const FavViewBtn = ({movieId}) => {
    const dispatch = useDispatch()

    const addToFav = (e, movieId) => {
        if (e.target.checked) {
           return dispatch(favFilmsActions.addFavFilms(movieId))
        }
            return dispatch(favFilmsActions.deleteFavFilms(movieId))
    }

    return (
        <Container>
            <Checkbox {...label} icon={<FavoriteBtn />} checkedIcon={<FavoriteBtnChecked />}
                onClick={(e) => addToFav(e, movieId)}
            />
            <Checkbox
                {...label}
                icon={<Viewed />}
                checkedIcon={<ViewedChecked />}
            />
        </Container>
    );
}

FavViewBtn.propTypes = {
    movieId: PropTypes.number.isRequired,
}

export default FavViewBtn;