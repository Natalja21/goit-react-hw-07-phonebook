// import action from './contacts-actions';
import { getContactsApi, addContactApi, removeContactApi } from 'servises/Api';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const isDublicate = ({ name, number }, contacts) => {
//     const findContact = contacts.find(
//         item =>
//             item.name.toLowerCase() === name.toLowerCase() || item.number === number
//     );
//     return Boolean(findContact);
// };
// export const fechContacts = () => {
//     const asyncFetchContacts = async dispatch => {
//         dispatch(action.fetchContactsLoading());
//         try {
//             const data = await getContacts();
//             dispatch(action.fetchContactsSuccess(data));
//         } catch (error) {
//             const { message, response } = error;
//             const errorData = {
//                 message,
//                 status: response.status,
//             };
//             dispatch(action.fetchContactsError(errorData));
//         }
//     };
//     return asyncFetchContacts;
// };

// export const addContacts = data => {
//     const asyncAddContact = async (dispatch, getState) => {
//         const { contacts } = getState();
//         if (data.name === '' || data.number === '') {
//             return Notify.warning(`Fill in the fields to save the contact`);
//         }
//         if (isDublicate(data, contacts.items)) {
//             return (
//                 Notify.warning(`${data.name} is already in the Phonebook`) ||
//                 Notify.warning(`${data.number} is already in the Phonebook`)
//             );
//         }
//         try {
//             dispatch(action.addContactsLoading());
//             const result = await addContact(data);
//             dispatch(action.addContactsSuccess(result));
//         } catch (error) {
//             const { message, response } = error;
//             const errorData = {
//                 message,
//                 status: response.status,
//             };
//             dispatch(action.addContactsError(errorData));
//         }
//     };

//     return asyncAddContact;
// };

// export const removeContacts = id => {
//     const asyncRemoveContact = async (dispatch) => {
//         try {
//             dispatch(action.removeContactsLoading());
//             await removeContact(id);
//             dispatch(action.removeContactsSuccess(id));
//         } catch (error) {
//             const { message, response } = error;
//             const errorData = {
//                 message,
//                 status: response.status,
//             };
//             dispatch(action.removeContactsError(errorData));
//         }
//     };
//     return asyncRemoveContact;
// };
export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const contacts = await getContactsApi();
            return contacts;
        } catch (error) {
            thunkAPI.rejectWithValue(error);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (data, thunkAPI) => {
        try {
            const result = await addContactApi(data);
            return result;
        } catch (error) {
            thunkAPI.rejectWithValue(error);
        }
    }
);

export const removeContact = createAsyncThunk(
    'contacts/removeContact',
    async (id, thunkAPI) => {
        try {
            const result = await removeContactApi(id);
            return result;
        } catch (error) {
            thunkAPI.rejectWithValue(error);
        }
    }
);