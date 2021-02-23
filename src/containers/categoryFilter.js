import React from 'react';

const CategoryFilter = () => {
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
      <button type="button"> Search </button>
      <br />
    </div>
  );
};

export default CategoryFilter;
