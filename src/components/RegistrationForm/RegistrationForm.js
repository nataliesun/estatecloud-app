import React, { Component } from 'react';
// import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'

import './RegistrationForm.scss'

class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => { }
  }

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()
    const { first_name, last_name, email, password } = ev.target

    this.setState({ error: null })
    AuthApiService.postUser({
      email: email.value,
      password: password.value,
      first_name: first_name.value,
      nickname: last_name.value,
    })
      .then(user => {
        first_name.value = ''
        last_name.value = ''
        email.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })

  }


  render() {
    const { error } = this.state
    return (
      <form
        className="RegistrationForm"
        onSubmit={this.handleSubmit}
      >
        <div role="alert">
          {error && <p className="red">{error}</p>}
        </div>
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