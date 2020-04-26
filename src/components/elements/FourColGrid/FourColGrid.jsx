import React from 'react';
import PropTypes from 'prop-types';
import './FourColGrid.css';

const FourColGrid = ({ children, header, loading }) => {
  const renderElements = () => {
    const gridElements = children.map((element, i) => {
      return (
        <div key={i} className="flix-grid-element">
          {element}
        </div>
      );
    });
    return gridElements;
  };

  return (
    <div className="flix-grid">
      {header && !loading ? <h1>{header}</h1> : null}

      <div className="flix-grid-content">{renderElements()}</div>
    </div>
  );
};

FourColGrid.propTypes = {
  header: PropTypes.string,
  loading: PropTypes.bool,
};

export default FourColGrid;
