export class ApiService {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  async fetchHandle(method, path) {
    const res = await fetch(`${this.baseUrl}${path}`, {
      method,
      headers: this.headers
    });
    if (res.ok) {
      return res.json();
    }
    return await Promise.reject(`Error: ${res.status}`);
  }
}
