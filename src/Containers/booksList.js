import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/book';

const BooksList = () => {
  const books = useSelector(state => state.book);
  return (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => (
          <Book key={book.id} id={book.id} title={book.title} category={book.category} />
        ))}
      </tbody>
    </table>
  );
};

export default BooksList;
