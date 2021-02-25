/* eslint-disable import/extensions */
import '../css/App.css';
import { Provider } from 'react-redux';
import store from '../store';
import BooksList from '../containers/booksList';
import BooksForm from '../containers/booksForm';
import NavbarComponent from '../utils/navbar';

function App() {
  return (
    <Provider store={store}>
      <NavbarComponent/>
      <div className='px-custom'>
        <BooksList />
        <br />
        <br />
        <BooksForm />
      </div>
    </Provider>
  );
}

export default App;
