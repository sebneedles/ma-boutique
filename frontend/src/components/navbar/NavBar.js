import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <nav>
        <div className="container__link">
          <Link to="/">Ma Boutique</Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
