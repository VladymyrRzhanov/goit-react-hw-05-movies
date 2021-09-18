import { createAction } from '@reduxjs/toolkit';

export const addViewedFilms = createAction('viewFilms/addViewedFilms');
export const deleteViewedFilms = createAction('viewFilms/deleteViewedFilms');