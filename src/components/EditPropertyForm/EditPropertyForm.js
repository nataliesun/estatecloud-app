import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'
import PropertyContext from '../../contexts/PropertyContext';
import PropertyApiService from '../../services/property-api-service';

import './EditPropertyForm.scss'

class EditPropertyForm extends Component {
  static contextType = PropertyContext

  state = {
    currentProp: {
      address: '',
      city: '',
      state: '',
      status: '',
      rent_price: 0,
      initial_price: 0,
      mortgage_payment: 0
    }
  }

  static defaultProps = {
    match: {
      params: {}
    }
  }

  componentDidMount() {

    PropertyApiService.getProperty(this.props.match.params.property_id)
      .then(res => this.setState({
        currentProp: res
      }))
  }

  handleAddressChange = (value) => {
    this.setState({
      currentProp: {
        ...this.state.currentProp,
        address: value
      }
    })
  }

  handleCityChange = (value) => {
    this.setState({
      currentProp: {
        ...this.state.currentProp,
        city: value
      }
    })
  }

  handleStateChange = (value) => {
    this.setState({
      currentProp: {
        ...this.state.currentProp,
        state: value
      }
    })
  }

  handleRentChange = (value) => {
    this.setState({
      currentProp: {
        ...this.state.currentProp,
        rent_price: value
      }
    })
  }

  handleStatusChange = (ev) => {
    this.setState({
      currentProp: {
        ...this.state.currentProp,
        status: ev.target.value
      }
    })
  }

  handleInitialChange = (value) => {
    this.setState({
      currentProp: {
        ...this.state.currentProp,
        initial_price: value
      }
    })
  }

  handleMortgageChange = (value) => {
    this.setState({
      currentProp: {
        ...this.state.currentProp,
        mortgage_payment: value
      }
    })
  }

  handleSubmit = (ev) => {
    ev.preventDefault();

    // console.log(this.state.currentProp)

    PropertyApiService.editProperty(this.props.match.params.property_id, this.state.currentProp)
      .then(res => this.props.history.push('/dashboard'))
      .catch(this.context.setError)
  }


  render() {
    return (
      <form className="EditPropertyForm" onSubmit={this.handleSubmit}>
        <div className="input-section">
          <label htmlFor="address">Address: </label>
          <input type="text" name="address" value={this.state.currentProp.address} onChange={e => this.handleAddressChange(e.target.value)} />
          <label htmlFor="city">City: </label>
          <input type="text" name="city" value={this.state.currentProp.city} onChange={e => this.handleCityChange(e.target.value)} />
          <label htmlFor="state">State: </label>
          <input type="text" name="state" value={this.state.currentProp.state} onChange={e => this.handleStateChange(e.target.value)} />
        </div>


        <div className="input-section-row">
          <label htmlFor="available">Available</label>
          <input
            type="radio"
            value="available"
            id="available"
            name="status"
            checked={this.state.currentProp.status === 'available'}
            onChange={this.handleStatusChange}
          />
          <label htmlFor="rented">Rented</label>
          <input
            type="radio"
            value="rented"
            id="rented"
            name="status"
            checked={this.state.currentProp.status === 'rented'}
            onChange={this.handleStatusChange}
          />
          <label htmlFor="occupied">Occupied</label>
          <input
            type="radio"
            value="occupied"
            id="occupied"
            name="status"
            checked={this.state.currentProp.status === 'occupied'}
            onChange={this.handleStatusChange}
          />
        </div>

        <div className="date-range">

        </div>

        <div className="input-section">
          <label htmlFor="rent-price">Rent price:</label>
          <input type="number" autoComplete="rent_price" name="rent_price" value={this.state.currentProp.rent_price} onChange={e => this.handleRentChange(e.target.value)} />


          <label htmlFor="intial-price">Initial price:</label>
          <input type="number" name="initial_price" value={this.state.currentProp.initial_price} onChange={e => this.handleInitialChange(e.target.value)} />


          <label htmlFor="mortgage-payment">Mortgage payment: </label>
          <input type="number" name="mortgage_payment" placeholder="1500" value={this.state.currentProp.mortgage_payment} onChange={e => this.handleMortgageChange(e.target.value)} />
        </div>

        <div className="submit-buttons">

          <button type="submit">Submit</button>
          <Link to='/dashboard'>
            <button>Cancel</button>
          </Link>
        </div>
      </form >
    );
  }
}

export default withRouter(EditPropertyForm);