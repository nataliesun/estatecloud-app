import config from '../config';
import TokenService from './token-service';

const PropertyApiService = {
  getProperties() {
    return fetch(`${config.API_ENDPOINT}/properties`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getPropertiesForUser(email) {
    return fetch(`${config.API_ENDPOINT}/properties/${email}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getProperty(id) {
    return fetch(`${config.API_ENDPOINT}/properties/${id}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  editProperty(id, newProperty) {
    return fetch(`${config.API_ENDPOINT}/properties/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(newProperty)
    }).then(res =>
      !res.ok ? res.then(e => Promise.reject(e)) : res
    );
  },
  postProperty(property) {
    return fetch(`${config.API_ENDPOINT}/properties`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(property)
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  deleteProperty(property_id) {
    return fetch(`${config.API_ENDPOINT}/properties/${property_id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
    })
  },
  seedDemoProperties() {
    const demoProperties = [
      {
        address: '4479 Ventura Drive',
        city: 'Santa Cruz',
        state: 'CA',
        status: 'rented',
        rent_price: 3200,
        initial_price: 750000,
        mortgage_payment: 2500
      },
      {
        address: '1279 Star Route',
        city: 'Bridgeview',
        state: 'IL',
        status: 'available',
        rent_price: 0,
        initial_price: 320000,
        mortgage_payment: 500
      }, {
        address: '1309 C Street',
        city: 'Chatham',
        state: 'MA',
        status: 'occupied',
        rent_price: 0,
        initial_price: 500000,
        mortgage_payment: 0
      }
    ]
    return fetch(`${config.API_ENDPOINT}/properties/demo`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(demoProperties)
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default PropertyApiService;