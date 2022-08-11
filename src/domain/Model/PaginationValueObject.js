import { Model } from "./Model";
import { InvalidPageNumber } from "domain/Errors/InvalidPageNumber.error";

export class PaginationValueObject extends Model {
  static create({ page, totalPages, totalResults }) {
    PaginationValueObject.validate({ page, totalPages });
    return new PaginationValueObject({ page, totalPages, totalResults });
  }

  static validate({ page, totalPages }) {
    if (page < 0 || page === undefined) {
      throw InvalidPageNumber.create(
        `[PaginationValueObject.validate] page(${page}) must be a positive number`
      );
    }

    if (!totalPages || totalPages < 0) {
      throw InvalidPageNumber.create(
        `[PaginationValueObject.validate] totalPages(${totalPages}) must be a positive number`
      );
    }

    if (page > totalPages) {
      throw InvalidPageNumber.create(
        `[PaginationValueObject.validate] page(${page}) must be less than or equal to totalPages(${totalPages})`
      );
    }
  }

  constructor({ page, totalPages, totalResults }) {
    super();
    this._page = page;
    this._totalPages = totalPages;
    this._totalResults = totalResults;
  }

  page() {
    return this._page;
  }

  totalPages() {
    return this._totalPages;
  }

  totalResults() {
    return this._totalResults;
  }

  toJSON() {
    return {
      page: this.page(),
      totalPages: this.totalPages(),
      totalResults: this.totalResults(),
    };
  }
}
