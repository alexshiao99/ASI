import React, { useState, useEffect } from 'react';
import SearchDetailsStyle from './Styles/SearchDetailsStyle.js';
const axiosHelper = require('../axiosHelper');

function SearchDetails({anime}) {
  let [details, setDetails] = useState({});
  useEffect(() => {
    if (anime.anilist) {
      console.log(anime.anilist.idMal, 'here')
      axiosHelper.getDetails(anime.anilist.idMal)
      .then((data) => console.log(data.data))
      .catch((err) => console.log(err));
    }
  }, [anime])
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