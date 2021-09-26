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

  formSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.reset();
  };

  reset = () => {
    this.setState({ value: '' });
  };

  render() {
    return (
      <form className={s.addContact} onSubmit={this.formSubmit}>
        <Title title="Phonebook" />
        <label>
          Name
          <input
            type="text"
            value={this.state.value}
            onChange={e => {
              this.setState({ value: e.currentTarget.value });
            }}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title=""
            required
          />
        </label>
        <button onClick={() => {}} type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
