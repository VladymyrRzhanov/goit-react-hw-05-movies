import React, {useEffect, useState} from 'react';
// import Checkbox from '@mui/material/Checkbox';
import PropTypes from 'prop-types'
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
// import Favorite from '@mui/icons-material/Favorite';
// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// import BookmarkIcon from '@mui/icons-material/Bookmark';
import * as favFilmsActions from "../../redux/favFilms/favFilms-actions";
import {getFavFilms} from "../../redux/favFilms/favFilms-selectors";
import { Container, FavoriteBtn, Viewed, FavoriteBtnChecked, ViewedChecked, Btn } from "./styles";
import { useDispatch, useSelector } from 'react-redux';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const FavViewBtn = ({movieId, id}) => {
    const dispatch = useDispatch();
    const isChecked = useSelector(getFavFilms);
    const [checked, setChecked] = useState(false);
    
    const addToFav = (e, movieId) => {
        if (e.target.checked) {
            setChecked(true)
            return dispatch(favFilmsActions.addFavFilms(movieId));
        } else {
            setChecked(false)
            return dispatch(favFilmsActions.deleteFavFilms(movieId))
        };
    };

    useEffect(() => {
        if (isChecked.includes(id)) {
            return setChecked(true)
        }
            return setChecked(false)
        
    }, [id, isChecked])

    // const addToFav = (e, movieId) => {
    //     if (e.target.checked) {
    // return setChecked(true)
    //     }
    // return setChecked(false)
    // };
 
    return (
        <Container>
            <Btn {...label} icon={<FavoriteBtn />} checkedIcon={<FavoriteBtnChecked />}
                onClick={(e) => addToFav(e, movieId)} id={id}
                checked={checked}
            />
            <Btn
                {...label}
                icon={<Viewed />}
                checkedIcon={<ViewedChecked />}
                id={id}
            />
        </Container>
    );
}

FavViewBtn.propTypes = {
    movieId: PropTypes.number.isRequired,
}

export default FavViewBtn;