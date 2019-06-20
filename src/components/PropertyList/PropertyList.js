import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropertyListItem from '../../components/PropertyListItem/PropertyListItem'




import './PropertyList.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class PropertyList extends Component {
  static defaultProps = {
    properties: []
  }

  handleAddClick = () => {
    this.props.history.push('/addProperty')
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
        {this.props.properties.length
          ? this.renderProperties()
          : <li className="link-button">
            <Link to='/addProperty'><FontAwesomeIcon icon='plus-circle' /></Link>
          </li>
        }
      </ul>
    );
  }
}

export default PropertyList;