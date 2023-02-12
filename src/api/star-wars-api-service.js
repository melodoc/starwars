import { ApiService } from '../api';
import { REQUEST_PARAMS, METHODS } from '../constants';

export class StarWarsApiService {
  static baseApi = new ApiService(REQUEST_PARAMS);

  static getFilmsList() {
    return StarWarsApiService.baseApi.fetchHandle(METHODS.get, '/films');
  }

  static getCharactersList() {
    return StarWarsApiService.baseApi.fetchHandle(METHODS.get, '/people');
  }

  static getCharacterById(id) {
    return StarWarsApiService.baseApi.fetchHandle(METHODS.get, `/people/${id}`);
  }

  static getStarshipList() {
    return StarWarsApiService.baseApi.fetchHandle(METHODS.get, '/starships');
  }

  static getStarshipById(id) {
    return StarWarsApiService.baseApi.fetchHandle(METHODS.get, `/starships/${id}`);
  }

  static getPlanetList() {
    return StarWarsApiService.baseApi.fetchHandle(METHODS.get, '/planets');
  }

  static getPlanetById(id) {
    return StarWarsApiService.baseApi.fetchHandle(METHODS.get, `/planets/${id}`);
  }
}
