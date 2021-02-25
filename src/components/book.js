import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  id, title, category, onRemove,
}) => (
  <div className="card d-flex mb-3 shadow-sm">
    <div className="row mx-0">
      <div className="card-body col-12 col-md-4 ">
        <strong className="h6 card-title">{category}</strong>
        <h3 className="h3 font-weight-bolder">{title}</h3>
        <p>Author Name</p>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn pl-0">
            Comments
          </button>
          <button
            type="button"
            className="btn border-left border-right"
            onClick={() => onRemove({ id, title, category })}
          >
            Remove
          </button>
          <button type="button" className="btn">
            Edit
          </button>
        </div>
      </div>
      <div className="card-body row mx-0 col-4 col-md-4 border-right">
        <div className="circle-wrap align-self-center">
          <div className="circle-inside" />
        </div>
        <div className="mx-auto align-self-center">
          <h2 className="display-4">0%</h2>
          <p className="text-secondary">Completed</p>
        </div>
      </div>
      <div className="card-body d-flex flex-column col-4 col-md-4 ">
        <p className="my-1">Current Chapter</p>
        <p>Chapter 1</p>
        <button type="button" className="btn btn-info w-50 disabled">
          Update Progress
        </button>
      </div>
    </div>
  </div>
);

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Book;
