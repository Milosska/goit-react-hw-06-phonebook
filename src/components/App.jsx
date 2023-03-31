import { useState, useEffect } from 'react';
import { GlobalStyles } from './GlobalStyles';
import 'modern-normalize';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const LS_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem(LS_KEY);
    return savedContacts !== null ? JSON.parse(savedContacts) : [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  const makeFiltredContacts = () => {
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const handleDelete = evtId => {
    setContacts(contacts.filter(({ id }) => id !== evtId));
  };

  return (
    <div>
      <GlobalStyles />
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter onFilter={handleFilter} />
      <ContactList
        filteredContacts={makeFiltredContacts()}
        onDelete={handleDelete}
      />
    </div>
  );
};
