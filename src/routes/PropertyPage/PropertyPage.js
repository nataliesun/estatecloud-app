import React, { Component } from 'react';

// import Schedule from '../../components/Schedule/Schedule'
import './PropertyPage.scss'

import PropertyContext from '../../contexts/PropertyContext'
import Schedule from '../../components/Schedule/Schedule';


class PropertyPage extends Component {
  static contextType = PropertyContext;

  render() {
    const { property_id } = this.props.match.params;
    const { propertyData } = this.context;

    const property = propertyData.properties.find(p => p.id === Number(property_id))

    return (
      <div className="PropertyPage">
        <h2>
          {propertyData.properties.length && property.address}

        </h2>
        <Schedule />
      </div>
    );
  }
}

export default PropertyPage;