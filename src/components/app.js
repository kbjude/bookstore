/* eslint-disable import/extensions */
import '../css/App.css';
import { Provider } from 'react-redux';
import store from '../store';
import BooksList from '../containers/booksList';
import BooksForm from '../containers/booksForm';

function App() {
  return (
    <Provider store={store}>
      <div>
        <BooksList />
        <br />
        <br />
        <BooksForm />
      </div>
    </Provider>
  );
}

export default App;
