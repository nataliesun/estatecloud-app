import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service'
import './CreateDemoBtn.scss';
import TokenService from '../../services/token-service';
import PropertyContext from '../../contexts/PropertyContext';
import PropertyApiService from '../../services/property-api-service';
import DateApiService from '../../services/date-api-service';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CreateDemoBtn extends Component {
  state = {
    error: null,
    loading: false
  }

  static contextType = PropertyContext;

  handleDemoBtnClick = () => {
    this.setState({
      loading: true
    })

    AuthApiService.deleteUserByEmail('demo@demo.com')
      .then(res => {
        AuthApiService.postUser({
          email: 'demo@demo.com',
          password: 'Demopassword1!',
          first_name: 'Demo',
          last_name: 'User',
        })
          .then(demoUser => {
            AuthApiService
              .postLogin({
                email: demoUser.email,
                password: 'Demopassword1!'
              })
              .then(res => {
                TokenService.saveAuthToken(res.authToken)
                PropertyApiService.seedDemoProperties()
                  .then(properties => {
                    const propertyIds = properties.map(p => p.id)
                    DateApiService.seedDemoReservations(propertyIds)
                      .then(reservations => {

                        this.context.handleLoginSuccess()
                        document.body.classList.add("blue")
                        this.props.history.push('/dashboard');
                      })
                  })

              })
          })
      })
      .catch(res => this.setState({
        error: res.error
      }))

  }

  render() {
    const buttonText = this.state.loading ? <FontAwesomeIcon spin icon="spinner" /> : "Demo";
    return (
      <button onClick={this.handleDemoBtnClick}>
        {buttonText}
      </button>
    );
  }
}

export default withRouter(CreateDemoBtn);