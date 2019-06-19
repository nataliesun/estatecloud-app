import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './PropertyListItem.scss';

class PropertyListItem extends Component {



  render() {
    const { address, id, profit, rent_price } = this.props;
    const propertyLink = `/property/${id}`;

    return (
      <li className="PropertyListItem">
        <Link to={propertyLink}>
          <h2>{address}</h2>
          <p>Available until: tbd</p>
          {
            !!rent_price
            && <p>
              Rented at: ${rent_price}
            </p>
          }
          <p>Monthly profit: ${profit}</p>
          <button className="edit-btn">Edit</button>
          <button className="delete-btn">Delete</button>
        </Link>
      </li>
    );
  }
}

export default PropertyListItem;

// function capitalizeAddress(address) {
//   const splitAddress = address.toLowerCase().split(' ');

//   for (let i = 0; i < splitAddress.length; i++) {
//     splitAddress[i] = splitAddress[i].charAt(0).toUpperCase() + splitAddress[i].substring(1);
//   }

//   return splitAddress.join(' ');
// }

// function checkStatus(status, dates) {
//   if (status === 'occupied') {
//     return `Occupied until: ${dates[1].toLocaleDateString()}`
//   } else if (status === 'rented') {
//     return `Rented until: ${dates[1].toLocaleDateString()}`
//   } else {
//     return `Available`
//   }
// }

// function calculateProfit(mortgage, rent) {
//   return rent - mortgage
// }