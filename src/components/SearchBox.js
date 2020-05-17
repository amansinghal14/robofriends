import React from 'react';
import './SearchBox.css';

const SearchBox = ({ onSearchChange }) => {
  return (
    <input 
      type="search" 
      placeholder="search robot..." 
      onInput={onSearchChange}
    />
  );
}

export default SearchBox;