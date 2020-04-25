import React from 'react';
import FontAwesome from 'react-fontawesome';
import { calcTime, convertMoney } from '../../../helpers';
import './MovieInfoBar.css';

const MovieInfoBar = (props) => {
  return (
    <div className="flix-movieinfobar">
      <div className="flix-movieinfobar-content">
        <div className="flix-movieinfobar-content-col">
          <FontAwesome className="fa-time" name="clock-o" size="2x" />
          <span className="flix-movieinfobar-info">
            Running Time: {calcTime(props.time)}
          </span>
        </div>
        <div className="flix-movieinfobar-content-col">
          <FontAwesome className="fa-budget" name="money" size="2x" />
          <span className="flix-movieinfobar-info">
            Budget: {convertMoney(props.budget)}
          </span>
        </div>
        <div className="flix-movieinfobar-content-col">
          <FontAwesome className="fa-revenue" name="ticket" size="2x" />
          <span className="flix-movieinfobar-info">
            Revenue: {convertMoney(props.revenue)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieInfoBar;
