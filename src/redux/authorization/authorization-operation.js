import { createAsyncThunk } from '@reduxjs/toolkit'

import * as transactionAPI from 'services/transactionAPI'
const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (credentials, thunkAPI) => {
        try {
            const response = await transactionAPI.logInUser(credentials)
            transactionAPI.token.set(response.user.token);
            return response
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)
const logoutUser = createAsyncThunk(
    'auth/logoutUser',
    async (_, thunkAPI) => {
        try {
            const response = await transactionAPI.logOutUser()
            transactionAPI.token.unset()
            return response
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)
const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (credentials, thunkAPI) => {
        try {
            const response = await transactionAPI.registerUser(credentials)
            // transactionAPI.token.set(response.token);
            return response
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)
const refreshUser = createAsyncThunk(
    'auth/refreshUser',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;
        if (persistedToken === null) {
            return thunkAPI.rejectWithValue();
        }
        try {
            transactionAPI.token.set(persistedToken);
            const response = await transactionAPI.refreshCurrUser()
            return response
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)
const operations = {
    loginUser,
    logoutUser,
    registerUser,
    refreshUser

};
export default operations;