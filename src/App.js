import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Form from './components/Form/Form';
import Title from './components/Title/Title';
import './App.css';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleRemove = () => {
    console.log('удаляйся!!');
  };

  render() {
    const { contacts } = this.state;
    return (
      <div className="App">
        <Form
          onSubmit={contact => {
            console.log('data', contact);
            this.setState(prevState => ({
              contacts: [...prevState.contacts, contact],
            }));
          }}
        />
        {contacts.length ? <Title title="Contacts" /> : null}
        <ul>
          {contacts.map(contact => {
            return (
              <li key={uuidv4()}>
                {contact}
                <button onClick={this.handleRemove}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
