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
  getReservationDetails(reservation_id) {
    return fetch(`${config.API_ENDPOINT}/reservations/reservation/${reservation_id}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getDatesForProperty(propertyId) {
    return fetch(`${config.API_ENDPOINT}/reservations/property/${propertyId}`, {
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
  },
  seedDemoReservations(propertyIds) {
    const demoReservations = [
      {
        property_id: propertyIds[0],
        title: 'Smiths',
        start_date: new Date(),
        end_date: new Date(),

      },
      {
        property_id: propertyIds[1],
        title: 'Laverne',
        start_date: new Date(),
        end_date: new Date(),

      },
      {
        property_id: propertyIds[2],
        title: 'Minji',
        start_date: new Date(),
        end_date: new Date(),

      }
    ]
    return fetch(`${config.API_ENDPOINT}/reservations/demo`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(demoReservations)
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default DateApiService;