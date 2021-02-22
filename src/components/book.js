/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  id, title, category, onRemove,
}) => (
  <tr>
    <td>{id}</td>
    <td>{title}</td>
    <td>{category}</td>
    <td><button type="button" onClick={()=>onRemove({ id, title, category })}>Remove</button> </td>
  </tr>
);

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Book;
