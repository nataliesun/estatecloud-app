import React, { Component } from 'react';
import PropertyContext from '../../contexts/PropertyContext'
import Schedule from '../../components/Schedule/Schedule';

import './PropertyPage.scss'




class PropertyPage extends Component {
  static contextType = PropertyContext;

  renderAddress = (id) => {
    return this.context.propertyData.properties.find(p => p.id === Number(id)).address
  }

  render() {
    const { property_id } = this.props.match.params;



    return (
      <div className="PropertyPage">
        <h2>
          {this.context.propertyData.properties && this.renderAddress(property_id)}

        </h2>
        <Schedule {...this.props} />
      </div>
    );
  }
}

export default PropertyPage;