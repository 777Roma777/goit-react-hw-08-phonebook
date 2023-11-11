import { configureStore } from '@reduxjs/toolkit';
import { contactsDataReducer } from './contactDataReducer';


export const store = configureStore({
  reducer: {
    contactsData: contactsDataReducer,
  },
});
