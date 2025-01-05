import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import selectNameFilter from './filtersSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: selectNameFilter,
  },
});
