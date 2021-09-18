import { createSlice } from '@reduxjs/toolkit';
import { addViewedFilms, deleteViewedFilms } from "./viewedFilms-actions";


const initialState = {
    viewed: []
};

const viewedFilmsSlice = createSlice({
    name: 'viewedFilms',
    initialState,
    extraReducers: {
        [addViewedFilms] (state, { payload }) {
            state.viewed = [payload, ...state.viewed];
        },
    // [addFavFilms]: (state, { payload }) => (state.filter(id => id !== payload) => [payload, ...state]),
        [deleteViewedFilms](state, { payload }) {
           state.viewed =  state.viewed.filter(id => id !== payload)
        }
    },
});

export default viewedFilmsSlice.reducer;