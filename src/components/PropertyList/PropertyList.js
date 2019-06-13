import React, { Component } from 'react';
import PropertyListItem from '../../components/PropertyListItem/PropertyListItem'
import PropertyContext from '../../contexts/PropertyContext';

import properties from '../../components/dummyProperties'

class PropertyList extends Component {
  static contextType = PropertyContext

  componentDidMount() {

    this.context.setProperties(properties.properties)
  }

  renderProperties = () => {
    const { properties } = this.context
    return properties.map((property, index) => {
      return <PropertyListItem key={index}{...property} />
    })
  }

  render() {
    return (
      <ul className="PropertyList">
        {this.context.properties.length && this.renderProperties()}
      </ul>
    );
  }
}

export default PropertyList;