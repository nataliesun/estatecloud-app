import React, { Component } from 'react';
import PropertyListItem from '../../components/PropertyListItem/PropertyListItem'




import './PropertyList.scss';

class PropertyList extends Component {
  static defaultProps = {
    properties: []
  }

  renderProperties = () => {
    const { properties } = this.props;

    return properties.map((property, index) => {
      return <PropertyListItem key={index} {...property} />
    })
  }

  render() {
    return (
      <ul className="PropertyList">
        {this.props.properties.length && this.renderProperties()}
      </ul>
    );
  }
}

export default PropertyList;