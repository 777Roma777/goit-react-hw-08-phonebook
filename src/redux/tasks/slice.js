import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';
import {
  fetchContacts,
  addContactAsync,
  deleteContactAsync,
} from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  filter: '',
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactDataSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(addContactAsync.pending, handlePending)
      .addCase(deleteContactAsync.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContactAsync.rejected, handleRejected)
      .addCase(deleteContactAsync.rejected, handleRejected)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addContactAsync.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload];
        state.isLoading = false;
      })
      .addCase(deleteContactAsync.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload.id
        );
      })
      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
        state.error = null;
        state.isLoading = false;
      });
  },
});

export const { setFilter } = contactDataSlice.actions;
export const contactsDataReducer = contactDataSlice.reducer;
