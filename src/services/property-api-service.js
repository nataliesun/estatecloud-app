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
  getProperty(thingId) {
    return fetch(`${config.API_ENDPOINT}/things/${thingId}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  // getPropertyReviews(thingId) {
  //   return fetch(`${config.API_ENDPOINT}/things/${thingId}/reviews`, {
  //     headers: {
  //       authorization: `bearer ${TokenService.getAuthToken()}`
  //     }
  //   }).then(res =>
  //     !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
  //   );
  // },
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