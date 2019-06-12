import React, { Component } from 'react';

import './RegistrationForm.scss'

class RegistrationForm extends Component {
  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault();
    const { first_name, last_name, email, password } = ev.target

    this.setState({ error: null })

  }


  render() {
    return (
      <form
        className="RegistrationForm"
        onSubmit={this.handleSubmit}
      >
        {/* <div role="alert">
          {error && <p className="red">{error}</p>}
        </div> */}
        <div className="first_name">
          <label htmlFor="first_name">
            First name
          </label>
          <input
            name="first_name"
            type="text"
            required
            id="first_name"
          />
        </div>
        <div className="last_name">
          <label htmlFor="last_name">
            Last name
          </label>
          <input
            name="last_name"
            type="text"
            required
            id="last_name"
          />
        </div>
        <div className="email">
          <label htmlFor="email">
            Email
          </label>
          <input
            name="email"
            type="email"
            required
            id="email"
          />
        </div>
        <div className="password">
          <label htmlFor="password">
            Password
          </label>
          <input
            name="password"
            type="password"
            required
            id="password"
          />
        </div>
        <button type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default RegistrationForm;