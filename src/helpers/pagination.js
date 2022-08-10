export const getTotalPages = (totalResults, pageSize) => {
  return Math.ceil(totalResults / pageSize);
};

export const getResultsPaginated = (data, pageSize, pageNumber) => {
  const initialPageElement = parseInt(pageNumber) * pageSize;
  const lastPageElement = (parseInt(pageNumber) + 1) * pageSize;
  return data.slice(initialPageElement, lastPageElement);
};
