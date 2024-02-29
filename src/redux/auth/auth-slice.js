import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from "./auth-operations";
import { pending, rejected } from "shared/redux-functions";

const initialState = {
    user: {},
    token: '',
    isLoggedIn: false,
    isLoading: false,
    error: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(register.pending, pending)
            .addCase(register.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.token = payload.token;
                state.isLoggedIn = true;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(register.rejected, rejected)
            .addCase(logIn.pending, pending)
            .addCase(logIn.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.token = payload.token;
                state.isLoggedIn = true;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(logIn.rejected, rejected)
            .addCase(logOut.pending, pending)
            .addCase(logOut.fulfilled, (state) => {
                state.user = {};
                state.token = '';
                state.isLoggedIn = false;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(logOut.rejected, rejected)
            .addCase(refreshUser.pending, pending)
            .addCase(refreshUser.fulfilled, (state, { payload }) => {
                state.user = payload;
                state.isLoggedIn = true;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(refreshUser.rejected, (state) => {
                state.isLoading = false;
                state.token = null;
            })
    }
});

export const authReducer = authSlice.reducer;