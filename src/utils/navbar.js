import React from 'react';

export const Navbar = () => (
  <nav className="border-bottom d-flex justify-content-between py-3 mb-4 nav-bg px-custom">
    <div className="d-flex align-items-center">
      <a className='mr-3 h4 font-weight-bolder' href="https://bookstore-jude-bereket.herokuapp.com/">Bookstore CMS</a>
      <a className='mx-3' href="https://bookstore-jude-bereket.herokuapp.com/">Books</a>
      <a className='mx-3' href="https://bookstore-jude-bereket.herokuapp.com/">Categories</a>
    </div>
    <div className='d-flex align-items-center'>
      <a href="https://bookstore-jude-bereket.herokuapp.com/">User icon</a>
    </div>
  </nav>
);

export default Navbar;
