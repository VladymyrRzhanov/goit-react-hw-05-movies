import { createAsyncThunk } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,  signOut, getAuth } from "firebase/auth";
import auth from "../../firebase";

export const getCurrentUser = createAsyncThunk('authUser/getCurrentUser',
    async (user) => {
        const userEmail = await user.email;
        const userUid = user.uid
        const userData = { userEmail, userUid }
        return userData;
    }
);


export const createUser = createAsyncThunk('authUser/createNewUser',
    async ({ email, password }) => {
        try {
            const auth = getAuth();
            const {user} = await createUserWithEmailAndPassword(auth, email, password );
            const userEmail = await user.email;
            const userUid = user.uid
            const userData = { userEmail, userUid }
            return userData;
        } catch (error) {
            throw new Error(error.message);
        }
    });

export const loginUser = createAsyncThunk('authUser/loginUser',
    async ({ email, password }) => {
        try {
            const auth = getAuth();
            const { user } = await signInWithEmailAndPassword(auth, email, password)
            const userEmail = await user.email;
            const userUid = await user.uid
            const userData = { userEmail, userUid }
            return userData;
        } catch (error) {
            throw new Error(error.message);
        }
    });

export const logoutUser = createAsyncThunk('authUser/logoutUser',
    async () => {
        try {
            const data = await signOut(auth);
            return data
        } catch (error) {
            throw new Error(error.message);
        };
    });


