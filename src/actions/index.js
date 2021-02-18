import * as bookTypes from './bookActionTypes';

export const createBook = book => ({
  type: bookTypes.CREATE_BOOK,
  payload: book,
});

export const removeBook = book => ({
  type: bookTypes.REMOVE_BOOK,
  payload: book,
});
