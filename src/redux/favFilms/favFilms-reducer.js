import { createSlice } from '@reduxjs/toolkit';
import { addFavFilms, deleteFavFilms } from "./favFilms-actions";


const initialState = {
    favourite: []
};

const favFilmsSlice = createSlice({
    name: 'favFilms',
    initialState,
    extraReducers: {
        [addFavFilms] (state, { payload }) {
            state.favourite = [payload, ...state.favourite];
        },
    // [addFavFilms]: (state, { payload }) => (state.filter(id => id !== payload) => [payload, ...state]),
        [deleteFavFilms](state, { payload }) {
           state.favourite =  state.favourite.filter(id => id !== payload)
        }
    },
});

export default favFilmsSlice.reducer;