import React from 'react';
import { useDispatch } from 'react-redux';


const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const [title, setTitle] = React.useState('');
  const [category, setCategory] = React.useState('');

  const handleChange = e => {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else {
      setCategory(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Where am i');
    console.log(e);
  };
  console.log(title);
  console.log(category);

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
