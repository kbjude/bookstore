import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/book';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from './categoryFilter';

const BooksList = () => {
  const books = useSelector(state => state.book);
  const dispatch = useDispatch();
  const handleRemoveBook = book => {
    dispatch(removeBook(book));
  };

  const handleFilterChange = () => {
    dispatch(changeFilter('Horror'));
  };
  console.log(useSelector(state => state.filter));

  return (
    <>
      <CategoryFilter filter={handleFilterChange} />
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <Book
              key={book.id}
              id={book.id}
              title={book.title}
              category={book.category}
              onRemove={handleRemoveBook}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default BooksList;
