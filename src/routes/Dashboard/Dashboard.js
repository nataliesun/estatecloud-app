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
      .then(this.context.setPropertyData)
      .catch(this.context.setError)

    UserApiService.getUserName()
      .then(name => this.setState({
        first_name: name.first_name
      }))
  }



  render() {
    const { propertyData } = this.context
    return (
      <div className="Dashboard" style={{ "textAlign": "center" }}>
        {!this.state.name && <h2>Hello,{" "}{this.state.first_name}!</h2>}
        <UserStats availability={propertyData.availability} portfolio_value={propertyData.portfolio_value} />
        <PropertyList properties={propertyData.properties} />
      </div>
    );
  }
}

export default Dashboard;