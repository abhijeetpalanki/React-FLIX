import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ movie }) => {
  return (
    <div className="flix-navigation">
      <div className="flix-navigation-content">
        <Link to="/">
          <p>Home</p>
        </Link>
        <p>/ {movie}</p>
      </div>
    </div>
  );
};

export default Navigation;
