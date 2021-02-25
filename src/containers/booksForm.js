import React from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../actions';

const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const [title, setTitle] = React.useState('');
  const [category, setCategory] = React.useState(categories[0]);
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
    if (e.target.title.value === '') { return false; }
    dispatch(createBook({
      id: Math.ceil(Math.random() * 1000),
      title,
      category,
    }));
    setTitle('');
    e.target.title.value = '';
    return true;
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>ADD NEW BOOK</h4>
      <div className="row form-group mx-0">
        <input name="title" className="col-12 col-md-6 form-control" placeholder="BookTitle" type="text" id="title-id" onChange={handleChange} required />
        <select name="category" className="col-12 col-md-3 mx-md-4 form-control" onChange={handleChange}>
          { categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button className="col-12 col-md-2 btn btn-info ml-md-4" type="submit">Add book</button>
      </div>
    </form>
  );
};

export default BooksForm;
