import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service'

import './LoginForm.scss'
import PropertyContext from '../../contexts/PropertyContext';

//center align with register styles

class LoginForm extends Component {
  static contextType = PropertyContext


  state = { error: null };

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { email, password } = ev.target;

    AuthApiService.postLogin({
      email: email.value,
      password: password.value
    })
      .then(res => {
        email.value = '';
        password.value = '';

        TokenService.saveAuthToken(res.authToken)
        window.location.reload();
        this.context.handleLoginSucces()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  };

  render() {
    const { error } = this.state;

    return (
      <form className="LoginForm" onSubmit={this.handleSubmitJwtAuth}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input required name="email" id="email" type="email" autoComplete="new-password" />
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <input
            autoComplete="new-password"
            required
            name="password"
            type="password"
            id="password"
          />
        </div>
        <button type="submit">Login</button>
      </form >
    );
  }
}

export default LoginForm;