/* eslint-disable import/extensions */
import '../css/App.css';
import { Provider } from 'react-redux';
import store from '../store';
import BooksList from '../containers/booksList';
import BooksForm from '../containers/booksForm';
import NavbarComponent from './navbar';

function App() {
  return (
    <Provider store={store}>
      <NavbarComponent />
      <div className="px-custom">
        <BooksList />
        <hr />
        <BooksForm />
      </div>
    </Provider>
  );
}

export default App;
