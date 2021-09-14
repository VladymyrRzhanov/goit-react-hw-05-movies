import { createReducer } from "@reduxjs/toolkit";
import { filmsPageActions } from "./filmsPage-actions";


const filmsPageReducer = createReducer('1', {
    [filmsPageActions]: (_, { payload }) => payload,
})

export default filmsPageReducer;