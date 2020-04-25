import React from 'react';
import './Header.css';

export const Header = () => {
  return (
    <div className="flix-header">
      <div className="flix-header-content">
        <img
          src="./images/reactMovie_logo.png"
          alt="flix-logo"
          className="flix-logo"
        />
        <img
          src="./images/tmdb_logo.png"
          alt="tmdb-logo"
          className="flix-tmdb-logo"
        />
      </div>
    </div>
  );
};
