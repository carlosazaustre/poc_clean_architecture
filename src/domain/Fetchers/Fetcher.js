export class Fetcher {
  static create() {
    throw new Error("[Fetcher.create] should be implemented");
  }

  get() {
    throw new Error("[Fetcher#get] should be implemented");
  }

  post() {
    throw new Error("[Fetcher#post] should be implemented");
  }

  put() {
    throw new Error("[Fetcher#put] should be implemented");
  }

  patch() {
    throw new Error("[Fetcher#patch] should be implemented");
  }

  delete() {
    throw new Error("[Fetcher#delete] should be implemented");
  }
}
