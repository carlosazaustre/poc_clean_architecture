export class Model {
  static create() {
    throw new Error("[Model.create] should be implemented");
  }

  toJSON() {
    throw new Error("[Model#toJSON] should be implemented");
  }
}
