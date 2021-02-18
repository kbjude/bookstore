import '../css/App.css';
import { Provider } from 'react-redux';
import store from '../store';
import BooksListComponent from '../containers/booksList';
import BooksFormComponent from '../containers/booksForm';

function App() {
  return (
    <Provider store={store}>
      <div>
        <BooksListComponent />
        <br />
        <br />
        <BooksFormComponent />
      </div>
    </Provider>
  );
}

export default App;
