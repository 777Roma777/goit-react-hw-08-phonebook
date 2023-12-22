import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  requestContacts,
  addContact,
  deleteContact,
} from 'components/services/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const contacts = await requestContacts();
      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactAsync = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const data = await addContact(newContact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactAsync = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const data = await deleteContact(contactId);
      return { id: contactId, data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
