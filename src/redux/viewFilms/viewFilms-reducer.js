import { createReducer } from "@reduxjs/toolkit";
import { addViewFilms, deleteViewFilms } from "./viewFilms-actions";


const viewFilmsReducer = createReducer([], {
    [addViewFilms]: (state, { payload }) => [payload, ...state],
    [deleteViewFilms]: (state, { payload }) => (state.filter(id => id !== payload))
})

export default viewFilmsReducer;