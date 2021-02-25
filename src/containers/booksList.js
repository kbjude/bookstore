import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/book';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from '../components/categoryFilter';

const BooksList = () => {
  const books = useSelector(state => state.book);
  const dispatch = useDispatch();
  const handleRemoveBook = book => {
    dispatch(removeBook(book));
  };

  const handleFilterChange = category => {
    dispatch(changeFilter(category));
  };
  const filteredBook = useSelector(state => state.filter);

  return (
    <>
      <CategoryFilter filter={handleFilterChange} />
      {books
        .filter(book => (filteredBook === 'All' ? book : book.category === filteredBook))
        .map(book => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            category={book.category}
            onRemove={handleRemoveBook}
          />
        ))}
    </>
  );
};

export default BooksList;
