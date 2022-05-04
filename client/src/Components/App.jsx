import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar.jsx';
import SearchPreview from './SearchPreview.jsx';
import SearchDetails from './SearchDetails.jsx';
import SearchContainerStyle from './Styles/SearchContainerStyle.js';
import SavedContainerStyle from './Styles/SavedContainerStyle.js';
import ResultsStyle from './Styles/ResultsStyle.js';
import SavedList from './SavedList.jsx';
import { WatchTitleDiv } from './Styles/SavedListStyle.js';
import { NavBarStyle, LogoSpan, SearchSpan, SavedSpan, LogoText } from './Styles/NavBarStyle.js';
import { HomeTitle, HomeContainer } from './Styles/HomeStyle.js';
import sampleData from '../../../tempdata.js'
const axios = require('axios');

function App() {
  let [page, setPage] = useState('Home');
  let [anime, setAnime] = useState({});
  let [details, setDetails] = useState({});
  useEffect(() => {
    setAnime(sampleData.result[0]);
  }, [])
  const  pageRouter = () => {
    if (page === "Home") {
      return (
        <HomeContainer>
          <HomeTitle>Let's get started by uploading a picture</HomeTitle>
          <SearchBar setAnime={setAnime} setPage={setPage}/>
        </HomeContainer>
      )
    }
    if (page === 'Search') {
      return (
        <SearchContainerStyle>
          <SearchBar setAnime={setAnime} setPage={setPage}/>
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
          <LogoText onClick={() => setPage('Home')} className={page === "Home" ? "clicked" : ""}>
            ANIMELIST
          </LogoText>
        </LogoSpan>
        <SearchSpan onClick={() => setPage('Search')} className={page === "Search" ? "clicked" : ""}>
          Search Anime
        </SearchSpan>
        <SavedSpan onClick={() => setPage('Saved')} className={page === "Saved" ? "clicked" : ""}>
          Saved Anime
        </SavedSpan>
      </NavBarStyle>
      {pageRouter()}
    </>
  )
}

export default App;