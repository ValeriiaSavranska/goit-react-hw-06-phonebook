import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import styles from './App.module.css';

import ContactForm from '../ContactForm/ContactForm.jsx';
import ContactList from '../ContactList/ContactList.jsx';
import Filter from '../Filter/Filter.jsx';
import * as storage from '../../services/localStorage';

const STORAGE_KEY = 'contacts';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = storage.get(STORAGE_KEY);
    if (savedContacts) {
      setContacts(savedContacts);
    }
  }, []);

  useEffect(() => {
    storage.save(STORAGE_KEY, contacts);
  }, [contacts]);

  const formSubmitHandler = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
      )
    ) {
      return alert(`${newContact.name} is already in contacts!`);
    }

    return setContacts([newContact, ...contacts]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts => {
      setFilter('');
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };

  const getFilteredContacts = () => {
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>

      <ContactForm onSubmit={formSubmitHandler} />

      <h2 className={styles.title}>Contacts</h2>

      {contacts.length > 1 && <Filter value={filter} onChange={changeFilter} />}

      {!!getFilteredContacts().length && (
        <ContactList
          filteredContacts={getFilteredContacts()}
          onDeleteContacts={deleteContact}
        />
      )}
    </div>
  );
};

export default App;
