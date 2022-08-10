import { requestParams } from '../constants';

export class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
    this._methods = {
      GET: 'GET',
      POST: 'POST',
      DELETE: 'DELETE',
      PUT: 'PUT',
      PATCH: 'PATCH'
    };
  }

  _fetchHandle(method, path, options) {
    return fetch(`${this.baseUrl}${path}`, {
      method,
      headers: this.headers,
      body: JSON.stringify(options)
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  getFilmsList() {
    return this._fetchHandle(this._methods.GET, '/films');
  }

  getCharactersList() {
    return this._fetchHandle(this._methods.GET, '/people');
  }

//   setUserInfo(name, about) {
//     return this._fetchHandle(this._methods.PATCH, '/users/me', {
//       name,
//       about
//     });
//   }
}

export const api = new Api(requestParams);
