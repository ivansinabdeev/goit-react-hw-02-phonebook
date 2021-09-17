import React, { Component } from 'react';
import './App.css';

import Form from './components/Form/Form';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div className="App">
        <Form />
      </div>
    );
  }
}

export default App;
