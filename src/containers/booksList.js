import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/book';
import { removeBook } from '../actions';

const BooksList = () => {
  const books = useSelector(state => state.book);
  const dispatch = useDispatch();
  const handleRemoveBook = book => {
    dispatch(removeBook(book));
  };
  return (
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
  );
};

export default BooksList;