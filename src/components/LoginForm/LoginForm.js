import React, { Component } from 'react';
import TokenService from '../../services/token-service';
// import AuthApiService from '../../services/auth-api-service'

import './LoginForm.scss'

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => { }
  };

  state = { error: null };

  handleSubmitBasicAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { email, password } = ev.target;

    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(email.value, password.value)
    )

    this.props.onLoginSucess()

    // AuthApiService.postLogin({
    //   user_name: user_name.value,
    //   password: password.value
    // })
    //   .then(res => {
    //     user_name.value = '';
    //     password.value = '';

    //     TokenService.saveAuthToken(res.authToken)
    //     this.props.onLoginSucess()
    //   })
    //   .catch(res => {
    //     this.setState({ error: res.error })
    //   })
  };

  render() {
    const { error } = this.state;

    return (
      <form className="LoginForm" onSubmit={this.handleSubmitBasicAuth}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="user_name">
          <label htmlFor="email">Email</label>
          <input required name="email" id="email" />
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <input
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