import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice/contactsSlice';

const store = configureStore({
  reducer: { contacts: contactsReducer },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

////////////////////////////////////////////////////////////////////////

// import { configureStore } from '@reduxjs/toolkit';
// import contactsReducer from './contacts/contactsReducer';
// import reducer from './contactsSlice/contactsSlice';

// const store = configureStore({
//   reducer: { contacts: contactsReducer },
//   devTools: process.env.NODE_ENV !== 'production',
// });

// export default store;

///////////////////////////////////////////////////////////////////////

// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import contactsReducer from './contacts/contactsReducer';

// const rootReducer = combineReducers({ contacts: contactsReducer });
// const store = createStore(rootReducer, composeWithDevTools());

// const store = createStore(rootReducer, devToolsEnhancer());

// export default store;
