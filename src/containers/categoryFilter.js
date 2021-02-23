import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ filter }) => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <div>
      <select name="category">
        {categories.map(category => (
          <option key={category}>
            {category}
          </option>
        ))}
      </select>
      <button type="button" onClick={() => filter()}> Search </button>
      <br />
    </div>
  );
};

CategoryFilter.propTypes = {
  filter: PropTypes.func.isRequired,
};

export default CategoryFilter;
