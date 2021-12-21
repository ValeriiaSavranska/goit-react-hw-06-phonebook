import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setContacts: (state, action) => ({ ...state, items: action.payload }),
    addContact: (state, action) => ({
      ...state,
      items: [...state.items, action.payload],
    }),
    deleteContact: (state, action) => ({
      ...state,
      items: state.items.filter(contact => contact.id !== action.payload),
    }),
    changeFilter: (state, action) => ({ ...state, filter: action.payload }),
  },
});

const { actions, reducer } = contactsSlice;

export const { setContacts, addContact, deleteContact, changeFilter } = actions;
export default reducer;
