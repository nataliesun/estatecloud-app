import config from '../config';
import TokenService from './token-service';

const FriendsApiService = {
  searchUsers(email) {
    return fetch(`${config.API_ENDPOINT}/friends/${email}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  editFriends(id, newFriends) {
    return fetch(`${config.API_ENDPOINT}/properties/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(newFriends)
    }).then(res =>
      !res.ok ? res.then(e => Promise.reject(e)) : res
    );
  },
  postFriends(property) {
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
  deleteFriends(property_id) {
    return fetch(`${config.API_ENDPOINT}/properties/${property_id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
    })
  }
};

export default FriendsApiService;