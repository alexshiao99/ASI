import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar.jsx';
import SearchPreview from './SearchPreview.jsx';
import SearchDetails from './SearchDetails.jsx';
import SearchContainerStyle from './Styles/SearchContainerStyle.js';
import SavedContainerStyle from './Styles/SavedContainerStyle.js';
import ResultsStyle from './Styles/ResultsStyle.js';
import SavedList from './SavedList.jsx';
import { WatchTitleDiv } from './Styles/SavedListStyle.js';
import { NavBarStyle, LogoSpan, SearchSpan, SavedSpan } from './Styles/NavBarStyle.js';
import sampleData from '../../../tempdata.js'
const axios = require('axios');

function App() {
  let [page, setPage] = useState('Search');
  let [anime, setAnime] = useState({});
  let [details, setDetails] = useState({});
  useEffect(() => {
    setAnime(sampleData.result[0]);
  }, [])
  const  pageRouter = () => {
    if (page === 'Search') {
      return (
        <SearchContainerStyle>
          <SearchBar setAnime={setAnime}/>
          <ResultsStyle>
            <SearchPreview anime={anime} details={details}/>
            <SearchDetails anime={anime} details={details} setDetails={setDetails}/>
          </ResultsStyle>
        </SearchContainerStyle>
      )
    }
    if (page === 'Saved') {
      return (
        <SavedContainerStyle>
          <WatchTitleDiv>SAVED ANIME</WatchTitleDiv>
          <SavedList page={page}/>
        </SavedContainerStyle>
      )
    }
  }
  return (
    <>
      <NavBarStyle>
        <LogoSpan>
          ANIMELIST
        </LogoSpan>
        <SearchSpan onClick={() => setPage('Search')}>
          Search Anime
        </SearchSpan>
        <SavedSpan onClick={() => setPage('Saved')}>
          Saved Anime
        </SavedSpan>
      </NavBarStyle>
      {pageRouter()}
    </>
  )
}

export default App;