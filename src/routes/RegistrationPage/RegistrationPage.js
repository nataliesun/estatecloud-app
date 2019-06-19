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
    const { history } = this.props
    history.push('/login')
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