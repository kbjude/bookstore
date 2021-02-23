import { combineReducers } from 'redux';
import bookReducer from './book';

const rootReducer = combineReducers({
  book: bookReducer,
  filter: filterReducer,
});

export default rootReducer;
