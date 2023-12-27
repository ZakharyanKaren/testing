const getPagesToRender = (currentPage: number, pageCount: number): (number | string)[] => {
  const createRange = (start: number, end: number): number[] => {
    const array: number[] = [];
    // eslint-disable-next-line no-plusplus
    for (let i = start; i < end; i++) {
      array.push(i);
    }
    return array;
  };

  if (pageCount <= 6) {
    return createRange(1, pageCount + 1);
  }

  switch (currentPage) {
    case 1:
    case 2:
      return [1, 2, 3, "...", pageCount];
    case 3:
      return [1, 2, 3, 4, "...", pageCount];
    case 4:
      return [1, 2, 3, 4, 5, "...", pageCount];
    case pageCount - 4:
      return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", pageCount];
    case pageCount - 3:
      return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", pageCount];
    case pageCount - 2:
      return [1, "...", currentPage - 1, currentPage, currentPage + 1, pageCount];
    case pageCount - 1:
      return [1, "...", currentPage - 1, currentPage, pageCount];
    case pageCount:
      return [1, "...", currentPage - 1, currentPage];
    default:
      return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", pageCount];
  }
};

export default getPagesToRender;
