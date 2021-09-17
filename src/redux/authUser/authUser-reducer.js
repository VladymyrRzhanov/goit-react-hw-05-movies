import { createSlice } from '@reduxjs/toolkit';
import * as authUserOperations from './authUser-operation';

const initialState = {
    user: null,
    isLoggedIn: false,
    isCurrentUser: false,
    error: null
};

const authUserSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [authUserOperations.createUser.fulfilled](state, { payload }) {
            state.user = payload;
            state.isLoggedIn = true;
        },
        [authUserOperations.createUser.rejected](state, { error }) {
            state.error = error.message;
            state.isLoggedIn = false;
        },
        [authUserOperations.loginUser.fulfilled](state, { payload }) {
            state.user = payload;
            state.isLoggedIn = true;
        },
        [authUserOperations.loginUser.rejected](state, { error }) {
            state.error = error.message;
            state.isLoggedIn = false;
        },
        [authUserOperations.logoutUser.fulfilled](state, action) {
            state.user = null;
            state.isLoggedIn = false;
        },
        [authUserOperations.getCurrentUser.pending](state) {
            state.isCurrentUser = true;
        },
        [authUserOperations.getCurrentUser.fulfilled](state, { payload }) {
            state.user = payload;
            state.isLoggedIn = true;
            state.isCurrentUser = false;
        },
        [authUserOperations.getCurrentUser.rejected](state) {
            state.isCurrentUser = false;
        },
    },
});

export default authUserSlice.reducer;