import React, { useState, useEffect } from 'react';
import { SearchDetailsStyle, TitleStyle, PosterStyle, DivImgDeets, DivAll, DivSyn, DivDeets, TitleStyle2, Category, Value } from './Styles/SearchDetailsStyle.js';
const axiosHelper = require('../axiosHelper');

function SearchDetails({anime}) {
  let [details, setDetails] = useState({});
  useEffect(() => {
    if (anime.anilist) {
      axiosHelper.getDetails(anime.anilist.idMal)
      .then((data) => setDetails(data.data))
      .catch((err) => console.log(err));
    }
  }, [anime])
  const router = () => {
    if (details.alternative_titles !== undefined) {
      return (
        <DivAll>
          <DivImgDeets>
            <DivDeets>
              <TitleStyle>{details.alternative_titles.en}</TitleStyle>
              <TitleStyle2>{details.alternative_titles.ja}</TitleStyle2>
              <Category>Rating: </Category><Value>{details.mean}</Value>
              <Category>Age Rating: </Category><Value>{details.rating}</Value>
              <Category>Season: </Category><Value>{details.start_season.season} of {details.start_season.year}</Value>
              <Category>Number of Episodes: </Category><Value>{details.num_episodes}</Value>
              <Category>Genres: </Category><Value>{details.genres.map((genre) => `${genre.name}`).slice(0, 4).join(', ')}</Value>
              <Category>Studios: </Category><Value>{details.studios.map((studio) => `${studio.name}`).join(', ')}</Value>
            </DivDeets>
          <PosterStyle src={details.main_picture.large} />
          </DivImgDeets>
          <DivSyn>
            <div>Synopsis:</div>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{details.synopsis}
          </DivSyn>
        </DivAll>
      )
    }
    return (<div>Please Search a Scene</div>)
  }
  return (
    router()
  )
}

export default SearchDetails;