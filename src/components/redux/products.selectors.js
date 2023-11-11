import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contactsData.contacts.items;
export const selectFilter = state => state.contactsData.filter;
export const selectIsLoading = state => state.contactsData.isLoading;
export const selectError = state => state.contactsData.error;
export const selectVisibleContacts = createSelector(
    [ selectContacts, selectFilter],
     (contacts, filter) => {
       return contacts.filter(contact => contact.name.toLowerCase()
        .includes(filter.toLowerCase()))
     }
    )
