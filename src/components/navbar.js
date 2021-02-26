import React from 'react';

export const Navbar = () => (
  <nav className="border-bottom d-flex justify-content-between py-3 mb-4 nav-bg px-custom">
    <div className="d-flex align-items-center">
      <a
        className="mr-3 h4 font-weight-bolder"
        href="https://bookstore-jude-bereket.herokuapp.com/"
      >
        Bookstore CMS
      </a>
      <a
        className="mx-3 text-secondary"
        href="https://bookstore-jude-bereket.herokuapp.com/"
      >
        Books
      </a>
      <a
        className="mx-3 text-secondary"
        href="https://bookstore-jude-bereket.herokuapp.com/"
      >
        Categories
      </a>
    </div>
    <div className="d-flex align-items-center">
      <a
        className="border rounded-circle p-1"
        href="https://bookstore-jude-bereket.herokuapp.com/"
      >
        <img src="https://img.icons8.com/ios-glyphs/30/000000/user-male.png" alt="userimg" />
      </a>
    </div>
  </nav>
);

export default Navbar;
