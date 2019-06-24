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
  }
};

export default PropertyApiService;