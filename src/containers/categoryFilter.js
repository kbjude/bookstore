import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ filter }) => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const [category, setCategory] = React.useState(categories[0]);
  return (
    <div>
      <select
        name="category"
        onChange={e => setCategory(e.target.value)}
      >
        {categories.map(category => (
          <option key={category}>
            {category}
          </option>
        ))}
      </select>
      <button type="button" onClick={() => filter(category)}> Search </button>
      <br />
    </div>
  );
};

CategoryFilter.propTypes = {
  filter: PropTypes.func.isRequired,
};

export default CategoryFilter;
