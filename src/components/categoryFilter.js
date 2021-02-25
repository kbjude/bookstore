import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ filter }) => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <div className="form-group">
      <label htmlFor="category" className="d-flex">
        Choose Category:
        <select
          name="category"
          onChange={e => filter(e.target.value)}
          className="mx-md-1 form-control w-25"
        >
          {categories.map(category => (
            <option key={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <br />
    </div>
  );
};

CategoryFilter.propTypes = {
  filter: PropTypes.func.isRequired,
};

export default CategoryFilter;
