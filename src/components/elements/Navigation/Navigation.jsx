import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = (props) => {
  return (
    <div className="flix-navigation">
      <div className="flix-navigation-content">
        <Link to="/">
          <p>Home</p>
        </Link>
        <p>/ {props.movie}</p>
      </div>
    </div>
  );
};

export default Navigation;
