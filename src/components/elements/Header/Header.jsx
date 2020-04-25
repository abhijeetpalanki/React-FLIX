import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="flix-header">
      <div className="flix-header-content">
        <Link to="/">
          <img
            src="./images/reactMovie_logo.png"
            alt="flix-logo"
            className="flix-logo"
          />
        </Link>
        <img
          src="./images/tmdb_logo.png"
          alt="tmdb-logo"
          className="flix-tmdb-logo"
        />
      </div>
    </div>
  );
};

export default Header;
