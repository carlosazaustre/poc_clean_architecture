import { getTotalPages, getResultsPaginated } from "helpers/pagination";

describe("[helpers] pagination", () => {
  describe("getTotalPages", () => {
    test("should return the total number of pages, as a integer", () => {
      const totalResults = 100;
      const pageSize = 10;
      const totalPages = getTotalPages(totalResults, pageSize);
      expect(totalPages).toBe(10);
    });
  });

  describe("getResultsPaginated", () => {
    test("should return an array of results sliced from the original one", () => {
      const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const pageSize = 3;
      const pageNumber = 2;
      const results = getResultsPaginated(data, pageSize, pageNumber);
      expect(results).toEqual([7, 8, 9]);
    });
  });
});
