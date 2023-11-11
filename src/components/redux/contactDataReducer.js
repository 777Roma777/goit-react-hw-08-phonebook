
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { requestContacts, addContact, deleteContact } from 'components/services/api';

const INITIAL_STATE = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const contacts = await requestContacts();
    return contacts;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContactAsync = createAsyncThunk('contacts/addContact', async (newContact, thunkAPI) => {
  try {
    const data = await addContact(newContact);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContactAsync = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => {
  try {
    const data = await deleteContact(contactId);
    return { id: contactId, data };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const contactDataSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
        state.contacts.isLoading = false;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })
      .addCase(addContactAsync.fulfilled, (state, action) => {
        state.contacts.items = [...state.contacts.items, action.payload];
      })
      .addCase(deleteContactAsync.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter((contact) => contact.id !== action.payload.id);
      });
  },
});


export const { setContacts, setFilter } = contactDataSlice.actions;

export const contactsDataReducer = contactDataSlice.reducer;
