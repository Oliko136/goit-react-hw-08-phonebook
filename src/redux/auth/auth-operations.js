import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authAPI from '../../services/auth-api';

export const register = createAsyncThunk(
    'auth/register',
    async (credentials, {rejectWithValue}) => {
        try {
            const data = await authAPI.register(credentials);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const logIn = createAsyncThunk(
    'auth/logIn',
    async (credentials, { rejectWithValue }) => {
        try {
            const data = await authAPI.logIn(credentials);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const logOut = createAsyncThunk(
    'auth/logOut',
    async (_, { rejectWithValue }) => {
        try {
            await authAPI.logOut();
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    })

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, { getState, rejectWithValue }) => {
        try {
            const { auth } = getState();
            const data = await authAPI.refreshUser(auth.token);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    },
    {
        condition: (_, { getState }) => {
            const { auth } = getState();
            if (!auth.token) {
                return false;
            }
        }
    }
);
