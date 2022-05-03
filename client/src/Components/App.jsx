import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar.jsx';
import SearchPreview from './SearchPreview.jsx';
import SearchDetails from './SearchDetails.jsx';
import SearchContainerStyle from './Styles/SearchContainerStyle.js';
import ResultsStyle from './Styles/ResultsStyle.js';
import { NavBarStyle, LogoSpan, SearchSpan, SavedSpan } from './Styles/NavBarStyle.js';
import sampleData from '../../../tempdata.js'
const axios = require('axios');

function App() {
  let [page, setPage] = useState('Search');
  let [anime, setAnime] = useState({});
  useEffect(() => {
    setAnime(sampleData.result[0]);
  }, [])
  const  pageRouter = () => {
    if (page === 'Search') {
      return (
        <SearchContainerStyle>
          <SearchBar setAnime={setAnime}/>
          <ResultsStyle>
            <SearchPreview anime={anime}/>
            <SearchDetails anime={anime}/>
          </ResultsStyle>
        </SearchContainerStyle>
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