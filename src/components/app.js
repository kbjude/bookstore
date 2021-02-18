import '../css/App.css';
import BooksListComponent from '../containers/booksList';
import BooksFormComponent from '../containers/booksForm';

function App() {
  return (
    <div>
      <BooksListComponent />
      <br />
      <br />
      <BooksFormComponent />
    </div>
  );
}

export default App;
