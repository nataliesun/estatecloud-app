import React, { Component } from 'react';

class PropertyListItem extends Component {
  render() {
    return (
      <li>
        <h2>{this.props.address}</h2>
      </li>
    );
  }
}

export default PropertyListItem;