import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropertyContext from '../../contexts/PropertyContext'
import Schedule from '../../components/Schedule/Schedule';

import './PropertyPage.scss'
import PropertyApiService from '../../services/property-api-service';

class PropertyPage extends Component {
  static contextType = PropertyContext;

  static defaultProps = {
    match: {
      params: {}
    }
  }

  state = {
    address: ''
  }

  componentDidMount() {
    PropertyApiService.getProperty(this.props.match.params.property_id)
      .then(property => this.setState({
        address: property.address
      }))
  }

  render() {
    const { address } = this.state;

    return (
      <div className="PropertyPage">
        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            {!!address && address}
          </li>
        </ul>
        <Schedule {...this.props} />
      </div>
    );
  }
}

export default PropertyPage;