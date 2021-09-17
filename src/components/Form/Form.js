import React, { Component } from 'react';
import s from './Form.module.css';

class Form extends Component {
  state = {};
  render() {
    return (
      <form className={s.addContact}>
        <h1>Phonebook</h1>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title=""
            required
          />
        </label>
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
