import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import {
  setContacts,
  addContact,
  deleteContact,
  changeFilter,
} from './contactsActions';

const itemsReducer = createReducer([], builder => {
  builder
    .addCase(setContacts, (_, action) => action.payload)
    .addCase(addContact, (state, action) => [action.payload, ...state])
    .addCase(deleteContact, (state, action) =>
      state.filter(contact => contact.id !== action.payload),
    );
});

const filterReducer = createReducer('', builder => {
  builder.addCase(changeFilter, (_, action) => action.payload);
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;

////////////////////////////////////////////////////////////////
// import { combineReducers } from 'redux';
// import TYPES from './contactsTypes';

// const itemsReducer = (state = [], action) => {
//   switch (action.type) {
//     case TYPES.SET:
//       return action.payload;

//     case TYPES.ADD:
//       return [action.payload, ...state];

//     case TYPES.REMOVE:
//       return state.filter(contact => contact.id !== action.payload);

//     default:
//       return state;
//   }
// };

// const filterReducer = (state = '', action) => {
//   switch (action.type) {
//     case TYPES.FILTER:
//       return action.payload;

//     default:
//       return state;
//   }
// };

// const contactsReducer = combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
// });

// export default contactsReducer;
