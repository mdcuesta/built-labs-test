import { 
  SET_PAGE, 
  setPage,
  SET_PAGE_SIZE,
  setPageSize,
  INCREMENT_PAGE,
  incrementPage,
} from './setting-action';

describe('Settings action', () => {

  it('should set page', () => {
    const page = 2;

    const expected = {
      type: SET_PAGE,
      page,
    };

    expect(setPage(page)).toEqual(expected);
  });

  it('should set page size', () => {
    const size = 3;

    const expected = {
      type: SET_PAGE_SIZE,
      size,
    };

    expect(setPageSize(size)).toEqual(expected);
  });

  it('should increment page', () => {
    const expected = {
      type: INCREMENT_PAGE,
    };

    expect(incrementPage()).toEqual(expected);
  })
})
