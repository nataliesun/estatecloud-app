import React, { Component } from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'

import './RegistrationPage.scss'

class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => { },
    },
  }

  handleRegistrationSuccess = user => {
    console.log('mew')
    const { history } = this.props
    history.push('/dashboard')
  }

  render() {
    return (
      <section className="RegistrationPage">
        <h2>Create an account</h2>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </section>
    );
  }
}

export default RegistrationPage;