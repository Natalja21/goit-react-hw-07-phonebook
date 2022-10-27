import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, removeContact } from './contacts-operations';
const initialState = {
    items: [],
    isLoading: false,
    error: null,
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchContacts.pending](state) {
            state.isLoading = true;
        },
        [fetchContacts.fulfilled](state, { payload }) {
            state.isLoading = false;
            state.error = null;
            state.items = payload;
        },
        [fetchContacts.rejected](state, { payload }) {
            state.isLoading = false;
            state.error = payload;
        },
        [addContact.pending](state) {
            state.isLoading = true;
        },
        [addContact.fulfilled](state, { payload }) {
            state.isLoading = false;
            state.error = null;
            state.items.push(payload);
        },
        [addContact.rejected](state, { payload }) {
            state.isLoading = false;
            state.error = payload;
        },
        [removeContact.pending](state) {
            state.isLoading = true;
        },
        [removeContact.fulfilled](state, { payload }) {
            state.isLoading = false;
            state.error = null;
            state.items = state.items.filter(item => item.id !== payload);
        },
        [removeContact.rejected](state, { payload }) {
            state.isLoading = false;
            state.error = payload;
        },
    },
});