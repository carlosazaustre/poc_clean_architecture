import { Model } from "./Model";
import { InvalidPageNumber } from "domain/Errors/InvalidPageNumber.error";

export class PageNumberValueObject extends Model {
  static create({ pageNumber }) {
    PageNumberValueObject.validate({ pageNumber });
    return new PageNumberValueObject({ pageNumber });
  }

  static validate({ pageNumber }) {
    if (pageNumber < 0 || pageNumber === undefined) {
      throw InvalidPageNumber.create(
        `[PageNumberValueObject.validate] pageNumber(${pageNumber}) must be a positive number`
      );
    }
  }

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
