import React, { useState, useEffect } from 'react';
import SearchPreviewStyle from './Styles/SearchPreviewStyle.js';
import VideoStyle from './Styles/VideoStyle.js';
import ReactPlayer from 'react-player'
import sampleData from '../../../tempdata.js'

function SearchPreview({ anime }) {


  console.log(anime);
  return (
    <SearchPreviewStyle>
      {anime.anilist ? anime.anilist.title.native : 'hello'}
      <br />
      <br />
      {anime.anilist ? anime.anilist.title.english : 'hello'}
      {anime.video ? <VideoStyle url={anime.video} controls={true} /> : <div>Please Search a Scene</div>}
    </SearchPreviewStyle>
  )
}

export default SearchPreview;
