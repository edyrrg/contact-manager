import React, { useState } from 'react';
import AddContact from './AddContact';
import { v4 as uuid } from 'uuid'
import ContactList from './ContactList';
import Header from './Header'

function App() {

  const [contacts, setContacts] = useState([])

  const AddContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }])
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    })

    setContacts(newContactList)
  }

  return (
    <div className='ui container'>
      <Header />
      <AddContact AddContactHandler={AddContactHandler} />
      <ContactList contacts={contacts} removeContactHandler={removeContactHandler} />
    </div>
  );
}

export default App;
