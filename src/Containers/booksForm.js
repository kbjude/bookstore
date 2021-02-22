import React from 'react';

const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  // const [title, setTitle] = React.useState('');
  // const [category, setCategory] = React.useState('');

  const handleChange = e => {
    console.log(e.target.type);
  };

  return (
    <form>
      <label htmlFor="title">
        Title:
        <input name="title" placeholder="Title" type="text" id="title-id" onChange={handleChange} />
      </label>
      <select name="category">
        { categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button type="button">Add book</button>
    </form>
  );
};

export default BooksForm;
