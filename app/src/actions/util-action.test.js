import {
  RAISE_ERROR,
  raiseError,
} from './util-action';

describe('Util actions', () => {
  it('should raise error', () => {
    const error = '404';
    const expected = {
      type: RAISE_ERROR,
      error,
    }

    expect(raiseError(error)).toEqual(expected);
  });
})