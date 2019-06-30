import config from '../config';
import TokenService from './token-service';

const UserApiService = {
  getUserName() {
    return fetch(`${config.API_ENDPOINT}/users/userName`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

};

export default UserApiService;