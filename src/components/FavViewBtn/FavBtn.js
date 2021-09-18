import React, {useEffect, useState} from 'react';
// import Checkbox from '@mui/material/Checkbox';
import PropTypes from 'prop-types'
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
// import Favorite from '@mui/icons-material/Favorite';
// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// import BookmarkIcon from '@mui/icons-material/Bookmark';
import * as favFilmsActions from "../../redux/favFilms/favFilms-actions";
import {getFavFilms} from "../../redux/favFilms/favFilms-selectors";
import { FavoriteBtn, FavoriteBtnChecked, Btn } from "./styles";
import { useDispatch, useSelector } from 'react-redux';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const FavBtn = ({ movieId }) => {
    const dispatch = useDispatch();
    const isChecked = useSelector(getFavFilms);
    const [checked, setChecked] = useState(false);
    
    const addToFav = (e, movieId) => {
        if (e.target.checked) {
            return dispatch(favFilmsActions.addFavFilms(movieId));
        } else {
            return dispatch(favFilmsActions.deleteFavFilms(movieId))
        };
    };

    useEffect(() => {
        if (isChecked.includes(movieId)) {
            return setChecked(true)
        }
        return setChecked(false)
        
    }, [movieId, isChecked])
 
    return (
        <Btn {...label} icon={<FavoriteBtn />} checkedIcon={<FavoriteBtnChecked />}
            onClick={(e) => addToFav(e, movieId)}
            checked={checked}
        />
    );
};

FavBtn.propTypes = {
    movieId: PropTypes.number.isRequired,
}

export default FavBtn;