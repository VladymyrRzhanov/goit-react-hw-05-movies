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
import filmsPageReducer from "./filmsPage/filmsPage-reducer";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token']
// }

export const store = configureStore({
  reducer: {
    auth: authUserReducer,
    // auth: persistReducer(authPersistConfig, authUserReducer),
    filmsPage: filmsPageReducer
  },
  middleware,
//   devTools: process.env.NODE_ENV === 'development',
});

// export const persistor = persistStore(store);