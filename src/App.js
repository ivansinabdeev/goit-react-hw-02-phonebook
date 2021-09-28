import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Form from './components/Form/Form';
import Title from './components/Title/Title';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import './App.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = contact => {
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          id: uuidv4(),
          name: contact.name,
          number: contact.number,
        },
      ],
    }));
  };

  handleRemove = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getvisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleContacts = this.getvisibleContacts();

    return (
      <div className="App">
        <Form onSubmit={this.handleSubmit} />
        {contacts.length ? <Title title="Contacts" /> : null}
        <Filter value={filter} onChange={this.changeFilter} />

        <ul>
          {visibleContacts.map(contact => (
            <ContactList
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
              handleClick={this.handleRemove}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
