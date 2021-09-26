import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Form from './components/Form/Form';
import Title from './components/Title/Title';
import ContactCard from './components/ContactCard/ContactCard';
import './App.css';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleSubmit = contact => {
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          id: uuidv4(),
          name: contact,
        },
      ],
    }));
  };

  handleRemove = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <div className="App">
        <Form onSubmit={this.handleSubmit} />
        {contacts.length ? <Title title="Contacts" /> : null}
        <ul>
          {contacts.map(contact => {
            return (
              <ContactCard
                key={contact.id}
                id={contact.id}
                name={contact.name}
                handleClick={this.handleRemove}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
