import React, { Component } from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'

import './RegistrationPage.scss'

class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => { },
    },
  }

  handleRegistrationSucess = user => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <section className="RegistrationPage">
        <h2>Create an account</h2>
        <RegistrationForm
          onRegistrationSucess={this.handleRegistrationSucess}
        />
      </section>
    );
  }
}

export default RegistrationPage;