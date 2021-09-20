import React, { Component } from 'react';

import Title from '../Title/Title';
import s from './Form.module.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }
  render() {
    const { value } = this.state;
    const { onSubmit } = this.props;
    return (
      <form
        className={s.addContact}
        onSubmit={e => {
          e.preventDefault();
          onSubmit(value);
        }}
      >
        <Title title="Phonebook" />
        <label>
          Name
          <input
            type="text"
            value={this.state.value}
            onChange={e => {
              console.log('value', e.currentTarget.value);
              this.setState({ value: e.currentTarget.value });
            }}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title=""
            required
          />
        </label>
        <button
          onClick={() => {
            console.log('Работает?');
          }}
          type="submit"
          className={s.button}
        >
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
