import axios from "axios";
import { Fetcher } from "./Fetcher";

export class HttpFetcher extends Fetcher {
  static create({ config } = {}) {
    return new HttpFetcher({ config });
  }

  constructor({ config }) {
    super();
    this._axios = axios.create(config);
  }

  get(url, options) {
    return this._axios.get(url, options);
  }

  post(url, body, options) {
    return this._axios.post(url, body, options);
  }

  put(url, body, options) {
    return this._axios.put(url, body, options);
  }

  patch(url, body, options) {
    return this._axios.patch(url, body, options);
  }

  delete(url, options) {
    return this._axios.delete(url, options);
  }
}
