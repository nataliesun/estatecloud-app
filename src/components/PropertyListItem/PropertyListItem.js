import React, { Component } from 'react';

import './PropertyListItem.scss';

class PropertyListItem extends Component {



  render() {
    const { address, status, dates, rent_price, mortgage_payment } = this.props;
    return (
      <li className="PropertyListItem">
        <h2>{capitalizeAddress(address)}</h2>
        <p>{checkStatus(status, dates)}</p>
        {
          !!Number(rent_price)
          && <p>
            Rented at: ${rent_price}
          </p>
        }
        <p>Monthly profit: ${calculateProfit(mortgage_payment, rent_price)}</p>
        <button className="edit-btn">Edit</button>
        <button className="delete-btn">Delete</button>
      </li>
    );
  }
}

export default PropertyListItem;

function capitalizeAddress(address) {
  const splitAddress = address.toLowerCase().split(' ');

  for (let i = 0; i < splitAddress.length; i++) {
    splitAddress[i] = splitAddress[i].charAt(0).toUpperCase() + splitAddress[i].substring(1);
  }

  return splitAddress.join(' ');
}

function checkStatus(status, dates) {
  if (status === 'occupied') {
    return `Occupied until: ${dates[1].toLocaleDateString()}`
  } else if (status === 'rented') {
    return `Rented until: ${dates[1].toLocaleDateString()}`
  } else {
    return `Available`
  }
}

function calculateProfit(mortgage, rent) {
  return Number(rent) - Number(mortgage)
}