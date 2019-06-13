import React, { Component } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker'

import './NewPropertyForm.scss'

class NewPropertyForm extends Component {
  state = {
    date: [new Date(), new Date()],
  }

  onDateChange = date => this.setState({ date })

  render() {
    return (
      <form className="NewPropertyForm">
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
          <input type="radio" name="available" />
          <label htmlFor="rented">Rented</label>
          <input type="radio" name="rented" />
          <label htmlFor="occupied">Occupied</label>
          <input type="radio" name="occupied" />
        </div>

        <div className="date-range">
          <DateRangePicker
            onChange={this.onDateChange}
            value={this.state.date}
          />
        </div>

        <div className="input-section">
          <label htmlFor="rent-price">Rent price:</label>
          <input type="number" name="rent-price" placeholder="2000" />


          <label htmlFor="intial-price">Inital price:</label>
          <input type="number" name="intial-price" placeholder="1000000" />


          <label htmlFor="mortgage-payment">Mortgage payment: </label>
          <input type="number" name="mortgage-payment" placeholder="1500" />
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