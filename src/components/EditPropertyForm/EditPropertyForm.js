import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import PropertyContext from '../../contexts/PropertyContext';
import PropertyApiService from '../../services/property-api-service';

class EditPropertyForm extends Component {
  static contextType = PropertyContext

  state = {
    currentProp: {}
  }

  static defaultProps = {
    match: {
      params: {}
    }
  }

  componentDidMount() {
    // console.log(this.context.propertyData.properties)

    // const currentProp = this.context.propertyData.properties.find(p => p.id = this.props.match.params.property_id)

    PropertyApiService.getProperty(this.props.match.params.property_id)
      .then(res => this.setState({
        currentProp: res
      }))

    // console.log(currentProp)
  }

  handleAddressChange = (value) => {
    this.setState({
      currentProp: {
        ...this.state.currentProp,
        address: value
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
          <input type="text" name="address" value={this.state.address} onChange={e => this.handleAddressChange(e.target.value)} />
          <label htmlFor="city">City: </label>
          <input type="text" name="city" value={this.state.city} />
          <label htmlFor="state">State: </label>
          <input type="text" name="state" value={this.state.state} />
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

        </div>

        <div className="input-section">
          <label htmlFor="rent-price">Rent price:</label>
          <input type="number" name="rent_price" value={this.state.rent_price} />


          <label htmlFor="intial-price">Initial price:</label>
          <input type="number" name="initial_price" />


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

export default withRouter(EditPropertyForm);