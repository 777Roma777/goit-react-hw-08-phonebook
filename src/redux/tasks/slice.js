import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';
import {
  fetchContacts,
  addContactAsync,
  deleteContactAsync,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactDataSlice = createSlice({
  name: 'contacts',
  contacts: {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContactAsync.pending]: handlePending,
    [deleteContactAsync.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addContactAsync.rejected]: handleRejected,
    [deleteContactAsync.rejected]: handleRejected,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addContactAsync.fulfilled](state, action) {
      state.items = [...state.items, action.payload];
      state.contacts.isLoading = false;
    },
    [deleteContactAsync.fulfilled](state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload.id
      );
    },
    [logOut.fulfilled](state) {
      state.items = [];
      state.error = null;
      state.isLoading = false;
    },
  },
});

export const contactsDataReducer = contactDataSlice.reducer;
