import React, { useState, useEffect } from 'react';
import SearchPreviewStyle from './Styles/SearchPreviewStyle.js';
import VideoStyle from './Styles/VideoStyle.js';
import VideoTitleStyle from './Styles/VideoTitleStyle.js';
import { AddButton, ButtonDiv } from './Styles/AddListStyle.js';
const axiosHelper = require('../axiosHelper');
import ReactPlayer from 'react-player'


function SearchPreview({ anime, details }) {
  const handleClick = () => {
    const toPost = {
      currentEp: 0,
      totalEp: details.num_episodes,
      en: details.alternative_titles.en,
      ja: details.alternative_titles.ja,
      rating: details.mean,
      image: details.main_picture.large
    }
    axiosHelper.saveAnime(toPost)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  }
  return (
    <SearchPreviewStyle>
      <VideoTitleStyle>{anime.episode ?  `Episode #${anime.episode}` : ""}</VideoTitleStyle>
      {anime.video ? <VideoStyle url={anime.video} controls={true} /> : <div>Please Search a Scene</div>}
      <ButtonDiv>
        <AddButton onClick={() => handleClick()}>Add To Saved List!</AddButton>
      </ButtonDiv>
    </SearchPreviewStyle>
  )
}

export default SearchPreview;
