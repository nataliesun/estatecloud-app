import React, { Component } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker'
import PropertyContext from '../../contexts/PropertyContext';

import './NewPropertyForm.scss'

class NewPropertyForm extends Component {
  static contextType = PropertyContext

  state = {
    date: [new Date(), new Date()],
  }

  onDateChange = date => this.setState({ date })

  handleSubmit = ev => {
    ev.preventDefault()

    const { address, city, state, status, rent_price, initial_price, mortgage_payment } = ev.target;

    const newProperty = {
      address: address.value,
      city: city.value,
      state: state.value,
      status: status.value,
      rent_price: rent_price.value,
      initial_price: initial_price.value,
      mortgage_payment: mortgage_payment.value
    }

    this.context.addProperty(newProperty)

    this.props.history.push('/dashboard')

  }

  render() {
    return (
      <form className="NewPropertyForm" onSubmit={this.handleSubmit}>
        <div className="input-section">
          <label htmlFor="address">Address: </label>
          <input type="text" name="address" placeholder="321 Awesome Ave." required />
          <label htmlFor="city">City: </label>
          <input type="text" name="city" placeholder="San Diego" required />
          <label htmlFor="state">State: </label>
          <input type="text" name="state" placeholder="CA" required />
        </div>


        <div className="input-section">
          <label htmlFor="available">Available</label>
          <input
            type="radio"
            value="available"
            id="available"
            name="status"
          />
          <label htmlFor="rented">Rented</label>
          <input
            type="radio"
            value="rented"
            id="rented"
            name="status"
          />
          <label htmlFor="occupied">Occupied</label>
          <input
            type="radio"
            value="occupied"
            id="occupied"
            name="status"
          />
        </div>

        <div className="date-range">
          <DateRangePicker
            onChange={this.onDateChange}
            value={this.state.date}
          />
        </div>

        <div className="input-section">
          <label htmlFor="rent-price">Rent price:</label>
          <input type="number" name="rent_price" placeholder="2000" />


          <label htmlFor="intial-price">Initial price:</label>
          <input type="number" name="initial_price" placeholder="1000000" />


          <label htmlFor="mortgage-payment">Mortgage payment: </label>
          <input type="number" name="mortgage_payment" placeholder="1500" />
        </div>

        <div className="submit-buttons">

          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </form >
    );
  }
}

export default NewPropertyForm