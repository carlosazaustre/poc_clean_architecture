import { Model } from "./Model";
// TODO: implement InvalidPageNumber Error

export class PageNumberValueObject extends Model {
  static create({ pageNumber }) {
    // TODO: validate page number
    return new PageNumberValueObject({ pageNumber });
  }

  // TODO: static validate

  constructor({ pageNumber }) {
    super();
    this.pageNumber = pageNumber;
  }

  value() {
    return this.pageNumber;
  }

  toJSON() {
    return {
      pageNumber: this.value(),
    };
  }
}
