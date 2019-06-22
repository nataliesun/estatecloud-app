import config from '../config';
import TokenService from './token-service';

const DateApiService = {
  getReservationsForUser() {
    return fetch(`${config.API_ENDPOINT}/reservations/user`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getDatesForProperty(propertyId) {
    return fetch(`${config.API_ENDPOINT}/reservations/${propertyId}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  postReservation(reservation) {
    return fetch(`${config.API_ENDPOINT}/reservations`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(reservation)
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  deleteReservation(reservation_id) {
    return fetch(`${config.API_ENDPOINT}/reservations/${reservation_id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
    })
  }
};

export default DateApiService;