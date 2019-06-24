import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import './PropertyListItem.scss';
import PropertyApiService from '../../services/property-api-service';
import PropertyContext from '../../contexts/PropertyContext';

class PropertyListItem extends Component {
  static contextType = PropertyContext

  handlePropertyDelete = (propertyId) => {

    PropertyApiService.deleteProperty(propertyId)
      .then(res => this.context.removeProperty(propertyId))
      .catch(this.context.setError)
  }

  handlePropertyEdit = (propertyId) => {
    this.props.history.push(`/editProperty/${propertyId}`)
  }

  render() {
    const { address, id, profit, rent_price } = this.props;
    const propertyLink = `/property/${id}`;

    return (
      <li className="PropertyListItem">
        <Link to={propertyLink}>
          <h2>{address}</h2>
        </Link>
        <p>Available until: tbd</p>
        {
          !!rent_price
          && <p>
            Rented at: ${rent_price}
          </p>
        }
        <p>Monthly profit: ${profit}</p>
        <button className="edit-btn" onClick={() => this.handlePropertyEdit(id)}>Edit</button>
        <button
          className="delete-btn"
          onClick={() => this.handlePropertyDelete(id)}
        >
          Delete
          </button>
      </li>
    );
  }
}

export default withRouter(PropertyListItem);