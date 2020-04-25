import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

export const Header = () => {
  return (
    <div className="flix-header">
      <div className="flix-header-content">
        <Link to="/" className="flix-logo">
          <FontAwesome
            className="fa-film flix-logo-image"
            name="film"
            size="3x"
          />
          <span className="flix-logo-react">React</span>
          <span className="flix-logo-flix">FLIX</span>
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
