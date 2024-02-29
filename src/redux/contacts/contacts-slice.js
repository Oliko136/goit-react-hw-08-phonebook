import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contacts-operations";
import { pending, rejected } from "shared/redux-functions";

const initialState = {
    items: [],
    isLoading: false,
    error: null
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, pending)
            .addCase(fetchContacts.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.error = null;
                state.items = payload;
            })
            .addCase(fetchContacts.rejected, rejected)
            .addCase(deleteContact.pending, pending)
            .addCase(deleteContact.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.error = null;
                state.items = state.items.filter(item => item.id !== payload);
            })
            .addCase(deleteContact.rejected, rejected)
            .addCase(addContact.pending, pending)
            .addCase(addContact.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.error = null;
                state.items.push(payload);
            })
            .addCase(addContact.rejected, rejected)
    }
})

export const contactsReducer = contactsSlice.reducer;