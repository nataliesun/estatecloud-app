import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropertyContext from '../../contexts/PropertyContext'
import Schedule from '../../components/Schedule/Schedule';

import './FriendsPropertyPage.scss'
import PropertyApiService from '../../services/property-api-service';

class FriendsPropertyPage extends Component {
  static contextType = PropertyContext;

  state = {
    address: ''
  }

  static defaultProps = {
    match: {
      params: {}
    }
  }


  componentDidMount() {
    PropertyApiService.getProperty(this.props.match.params.property_id)
      .then(property => this.setState({
        address: property.address
      }))
  }

  render() {

    return (
      <div className="FriendsPropertyPage">
        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/friends">
              Search Friends
            </Link>
          </li>
          <li>
            {this.state.address}
          </li>
        </ul>
        <Schedule {...this.props} />
      </div>
    );
  }
}

export default FriendsPropertyPage;