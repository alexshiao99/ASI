import React, {useState} from 'react';
import SearchDetailsStyle from './Styles/SearchDetailsStyle.js';

function SearchDetails({anime}) {
  const router = () => {
    if (anime) {
      return (
        <div>hi</div>
      )
    }
    return (<div>Please Search a Scene</div>)
  }
  return (
    <SearchDetailsStyle>
      <h2>Anime Details</h2>
      {router()}
    </SearchDetailsStyle>
  )
}

export default SearchDetails;