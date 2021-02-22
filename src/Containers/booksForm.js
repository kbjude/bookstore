import React from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../actions';

const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const [title, setTitle] = React.useState('');
  const [category, setCategory] = React.useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else {
      setCategory(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createBook({
      id: Math.ceil(Math.random() * 1000),
      title,
      category,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        Title:
        <input name="title" placeholder="Title" type="text" id="title-id" onChange={handleChange} />
      </label>
      <select name="category" onChange={handleChange}>
        { categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button type="submit">Add book</button>
    </form>
  );
};

export default BooksForm;
