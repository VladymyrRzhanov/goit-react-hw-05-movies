import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authUserReducer from "./authUser/authUser-reducer";
import favFilmsReducer from './favFilms/favFilms-reducer';
import filmsPageReducer from "./filmsPage/filmsPage-reducer";
import viewedFilmsReducer from './viewFilms/viewedFilms-reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const favFilmsPersistConfig = {
  key: 'favFilms',
  storage,
  // whitelist: ['user']
}

const viewFilmsPersistConfig = {
  key: 'viewFilms',
  storage,
  // whitelist: ['user']
}

export const store = configureStore({
  reducer: {
    auth: authUserReducer,
    // auth: persistReducer(authPersistConfig, authUserReducer),
    filmsPage: filmsPageReducer,
    // favFilms: favFilmsReducer,
    favFilms: persistReducer(favFilmsPersistConfig, favFilmsReducer),
    viewedFilms: persistReducer(viewFilmsPersistConfig, viewedFilmsReducer)
  },
  middleware,
//   devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);