import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types'
import * as viewedFilmsActions from "../../redux/viewFilms/viewedFilms-actions";
import { getViewedFilms } from "../../redux/viewFilms/viewedFilms-selectors";
import {  Viewed, ViewedChecked, Btn } from "./styles";
import { useDispatch, useSelector } from 'react-redux';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const ViewedBtn = ({ movieId }) => {
    const dispatch = useDispatch();
    const isChecked = useSelector(getViewedFilms);
    const [checked, setChecked] = useState(false);
    
    const addToViewed = (e, movieId) => {
        if (e.target.checked) {
            return dispatch(viewedFilmsActions.addViewedFilms(movieId));
        } else {
            return dispatch(viewedFilmsActions.deleteViewedFilms(movieId))
        };
    };

    useEffect(() => {
        if (isChecked.includes(movieId)) {
            return setChecked(true)
        }
        return setChecked(false)
        
    }, [movieId, isChecked])
 
    return (
        <Btn {...label} icon={<Viewed />} checkedIcon={<ViewedChecked />}
            onClick={(e) => addToViewed(e, movieId)}
            checked={checked}
        />
    );
};

ViewedBtn.propTypes = {
    movieId: PropTypes.number.isRequired,
}

export default ViewedBtn;