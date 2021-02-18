import * as bookTypes from '../actions/bookActionTypes';

const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case bookTypes.CREATE_BOOK:
      return [...state, action.payload];
    case bookTypes.REMOVE_BOOK:
      return;
    default: return state;
  }
};

export default bookReducer;
