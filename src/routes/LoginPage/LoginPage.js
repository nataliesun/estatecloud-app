import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

import './LoginPage.scss'

class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/dashboard'
    history.push(destination)
  }

  render() {
    return (
      <div className="LoginPage">
        <h2>Login</h2>
        <LoginForm
          onLoginSucess={this.handleLoginSuccess}
          {...this.props}
        />
      </div>
    );
  }
}

export default LoginPage;