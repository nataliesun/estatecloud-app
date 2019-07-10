import React, { Component } from 'react';
import PropertyList from '../../components/PropertyList/PropertyList';
import UserStats from '../../components/UserStats/UserStats';
import PropertyApiService from '../../services/property-api-service';
import PropertyContext from '../../contexts/PropertyContext';

import './Dashboard.scss';
import UserApiService from '../../services/user-api-service';


class Dashboard extends Component {
  static contextType = PropertyContext

  state = {
    first_name: ''
  }


  addProperty = () => {
    this.props.history.push('/addProperty')
  }


  componentDidMount() {

    this.context.clearError()
    PropertyApiService.getProperties()
      .then(
        // res => console.log(res)
        this.context.setProperties
      )
      .catch(this.context.setError)

    UserApiService.getUserName()
      .then(name => this.setState({
        first_name: name.first_name
      }))
  }



  render() {
    const { properties } = this.context
    const { availability, portfolio_value } = calculatePropertyInfo(properties)
    return (
      <div className="Dashboard" style={{ "textAlign": "center" }}>
        {
          !this.state.name
          && <h2>Hello,{" "}{this.state.first_name}!</h2>
        }
        <UserStats
          availability={availability}
          portfolio_value={portfolio_value}
        />
        <PropertyList
          properties={properties}
        />
      </div>
    );
  }
}

export default Dashboard;

function calculatePropertyInfo(properties = []) {
  let availability = [0, 0, 0]

  for (let i = 0; i < properties.length; i++) {
    if (properties[i].status === "available")
      availability[0]++

    else if (properties[i].status === "occupied")
      availability[1]++

    else
      availability[2]++
  }

  return {
    availability,
    portfolio_value: properties.reduce((a, b) => { return a + b.initial_price }, 0)
  }

}