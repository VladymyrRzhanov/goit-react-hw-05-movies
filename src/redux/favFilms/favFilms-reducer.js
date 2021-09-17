import { createReducer } from "@reduxjs/toolkit";
import { addFavFilms, deleteFavFilms } from "./favFilms-actions";

const favFilmsReducer = createReducer([], {
    [addFavFilms]: (state, { payload }) => [payload, ...state],
    // [addFavFilms]: (state, { payload }) => (state.filter(id => id !== payload) => [payload, ...state]),
    [deleteFavFilms]: (state, { payload }) => (state.filter(id => id !== payload))
})

export default favFilmsReducer;