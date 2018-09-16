export const RAISE_ERROR = 'RAISE_ERROR';

export const raiseError = (error) => {
  return {
    type: RAISE_ERROR,
    error,
  };
};
