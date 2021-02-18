import * as bookTypes from '../actions/bookActionTypes';

const initialState = [{
  id: Math.ceil(Math.random() * 1000),
  title: "The Bible",
  category: "Learning",
},
{
  id: Math.ceil(Math.random() * 1000),
  title: "Coding 101",
  category: "Horror",
}
];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case bookTypes.CREATE_BOOK:
      return [...state, action.payload];
    case bookTypes.REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default: return state;
  }
};

export default bookReducer;
