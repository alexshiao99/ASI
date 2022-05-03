import React, { useState, useEffect } from 'react';
import SearchPreviewStyle from './Styles/SearchPreviewStyle.js';
import VideoStyle from './Styles/VideoStyle.js';
import VideoTitleStyle from './Styles/VideoTitleStyle.js';
import ReactPlayer from 'react-player'


function SearchPreview({ anime }) {


  console.log(anime);
  return (
    <SearchPreviewStyle>
      <VideoTitleStyle>{anime.episode ?  `Episode #${anime.episode}` : ""}</VideoTitleStyle>
      {anime.video ? <VideoStyle url={anime.video} controls={true} /> : <div>Please Search a Scene</div>}
    </SearchPreviewStyle>
  )
}

export default SearchPreview;
