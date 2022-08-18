import { requestParams } from '../constants';

class Api {
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

  getCharacterById(id) {
    return this._fetchHandle(this._methods.GET, `/people/${id}`);
  }

  getStarshipList() {
    return this._fetchHandle(this._methods.GET, '/starships');
  }

  getStarshipById(id) {
    return this._fetchHandle(this._methods.GET, `/starships/${id}`);
  }

  getPlanetList() {
    return this._fetchHandle(this._methods.GET, '/planets');
  }

  getPlanetById(id) {
    return this._fetchHandle(this._methods.GET, `/planets/${id}`);
  }
}

export const api = new Api(requestParams);
