import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filter-slice';
import { contactsSlice } from './contacts-slise';

export const store = configureStore({
    reducer: {
        contacts: contactsSlice.reducer,
        filter: filterSlice.reducer,
    },
});


