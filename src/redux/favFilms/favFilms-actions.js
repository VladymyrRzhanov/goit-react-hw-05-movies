import { createAction } from '@reduxjs/toolkit';

export const addFavFilms = createAction('favFilms/addFavFilms');
export const deleteFavFilms = createAction('favFilms/deleteFavFilms');