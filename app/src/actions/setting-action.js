export const SET_PAGE_SIZE = 'SET_PAGE_SIZE';
export const INCREMENT_PAGE = 'INCREMENT_PAGE';
export const SET_PAGE = 'SET_PAGE';

export const setPageSize = (size) => {
  return {
    type: SET_PAGE_SIZE,
    size,
  };
};

export const incrementPage = () => {
  return {
    type: INCREMENT_PAGE,
  };
};

export const setPage = (page) => {
  return {
    type: SET_PAGE,
    page,
  };
};
