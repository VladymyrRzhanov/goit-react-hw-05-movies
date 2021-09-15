import { createAsyncThunk } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../../firebase";

export const getCurrentUser = createAsyncThunk('authUser/getCurrentUser',
    async (user) => {
        try {
            const {data} = await onAuthStateChanged(auth, (user))
            const userEmail = await data.email;
            const userUid = data.uid
            const userData = { userEmail, userUid }
            return userData;
        } catch (error) {
            
        }
    });


export const createUser = createAsyncThunk('authUser/createNewUser',
    async ({ email, password }) => {
        try {
            const {user} = await createUserWithEmailAndPassword(auth, email, password );
            const userEmail = await user.email;
            const userUid = user.uid
            const userData = { userEmail, userUid }
            return userData;
        } catch (error) {
            
        }
    });

export const loginUser = createAsyncThunk('authUser/loginUser',
    async ({ email, password}) => {
        try {
            const { user } = await signInWithEmailAndPassword(auth, email, password)
            console.log(user)
            const userEmail = await user.email;
            const userUid = user.uid
            const userData = { userEmail, userUid }

            // token.set(data.token);
            return userData;
        } catch (error) {
            console.log(error.message)
        }
    });

export const logoutUser = createAsyncThunk('authUser/logoutUser',
    async () => {
        try {
            const data = await signOut(auth);
            return data
        } catch (error) {
            
        };
    });


