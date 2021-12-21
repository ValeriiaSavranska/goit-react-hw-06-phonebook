import { createAction } from '@reduxjs/toolkit';

const setContacts = createAction('contacts/set_items');
const addContact = createAction('contacts/add_item');
const deleteContact = createAction('contacts/remove_item');
const changeFilter = createAction('contacts/change_filter');

export { setContacts, addContact, deleteContact, changeFilter };

// ////////////////////////////////////////////////////////////////
// import TYPES from './contactsTypes';

// const setContacts = contacts => ({
//   type: TYPES.SET,
//   payload: contacts,
// });

// const addContact = contact => ({
//   type: TYPES.ADD,
//   payload: contact,
// });

// const deleteContact = id => ({
//   type: TYPES.REMOVE,
//   payload: id,
// });

// const changeFilter = value => ({
//   type: TYPES.FILTER,
//   payload: value,
// });

// export { setContacts, addContact, deleteContact, changeFilter };
