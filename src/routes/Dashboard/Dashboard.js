import React, { Component } from 'react';
import PropertyList from '../../components/PropertyList/PropertyList';
import UserStats from '../../components/UserStats/UserStats';
import PropertyApiService from '../../services/property-api-service';
import PropertyContext from '../../contexts/PropertyContext';

import './Dashboard.scss';


class Dashboard extends Component {
  static contextType = PropertyContext


  addProperty = () => {
    this.props.history.push('/addProperty')
  }


  componentDidMount() {
    this.context.clearError()
    PropertyApiService.getProperties()
      .then(this.context.setPropertyData)
      .catch(this.context.setError)
  }



  render() {
    const { propertyData } = this.context
    return (
      <div className="Dashboard" style={{ "textAlign": "center" }}>
        <h2>Dashboard</h2>
        <UserStats availability={propertyData.availability} portfolio_value={propertyData.portfolio_value} />
        <PropertyList properties={propertyData.properties} />
      </div>
    );
  }
}

export default Dashboard;