import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ filter }) => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <div>
      <label htmlFor="category">
        Choose Category:
        <select
          name="category"
          onChange={e => filter(e.target.value)}
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
