import React, {useState} from 'react';
import SearchBarStyle from './Styles/SearchBarStyle.js';

function SearchBar({}) {
  return (
    <SearchBarStyle>
      <input className="urlSearchBar" type="text" placeholder="Enter a url..."></input>
      <button className="Btn">Search</button>
      <button className="Btn">Upload</button>
    </SearchBarStyle>
  )
}

export default SearchBar;