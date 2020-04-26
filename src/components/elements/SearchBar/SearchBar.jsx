import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
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
      <div className="flix-searchbar">
        <div className="flix-searchbar-content">
          <FontAwesome className="flix-fa-search" name="search" size="2x" />
          <input
            type="text"
            className="flix-searchbar-input"
            placeholder="Search"
            onChange={this.doSearch}
            value={value}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
