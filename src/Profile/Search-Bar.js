import React, { Component } from 'react';
import { Input } from 'antd';

const { Search } = Input;

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <Search placeholder="Αναζήτηση" />
      </div>
    );
  }
}

export default SearchBar;
