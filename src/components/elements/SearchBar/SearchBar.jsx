import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import './SearchBar.css';

export class SearchBar extends Component {
  state = {
    value: '',
  };

  timeout = null;

  doSearch = (event) => {
    const { callback } = this.props;

    this.setState({
      value: event.target.value,
    });

    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      callback(false, this.state.value);
    }, 500);
  };

  render() {
    const { value } = this.state;

    return (
      <div className="flix-header">
        <div className="flix-header-content">
          <Link to="/" className="flix-logo">
            <span className="flix-logo-react">React</span>
            <span className="flix-logo-flix">FLIX</span>
          </Link>
          <div className="flix-searchbar">
            <div className="flix-searchbar-content">
              <FontAwesome className="flix-fa-search" name="search" />
              <input
                type="text"
                className="flix-searchbar-input"
                placeholder="Search Movie..."
                onChange={this.doSearch}
                value={value}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
