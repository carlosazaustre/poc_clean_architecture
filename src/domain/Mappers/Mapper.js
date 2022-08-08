export class Mapper {
  static create() {
    throw new Error("[Mapper.create] should be implemented");
  }

  map() {
    throw new Error("[Mapper#map] should be implemented");
  }
}
