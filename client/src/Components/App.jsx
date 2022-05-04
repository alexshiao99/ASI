import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SearchBar from './SearchBar.jsx';
import SearchPreview from './SearchPreview.jsx';
import SearchDetails from './SearchDetails.jsx';
import SavedList from './SavedList.jsx';
import LoadingModal from './LoadingModal.jsx';
import SearchContainerStyle from './Styles/SearchContainerStyle.js';
import SavedContainerStyle from './Styles/SavedContainerStyle.js';
import ResultsStyle from './Styles/ResultsStyle.js';
import { WatchTitleDiv } from './Styles/SavedListStyle.js';
import { NavBarStyle, LogoSpan, SearchSpan, SavedSpan, LogoText } from './Styles/NavBarStyle.js';
import { HomeTitle, HomeContainer } from './Styles/HomeStyle.js';
import sampleData from '../../../tempdata.js'
const axios = require('axios');

function App({ loadPage = "" }) {
  let [page, setPage] = useState(loadPage);
  let [anime, setAnime] = useState({});
  let [details, setDetails] = useState({});
  let [modal, setModal] = useState(false);
  const navigate = useNavigate();
  let { pathname } = useLocation();

  useEffect(() => {
    setAnime(sampleData.result[0]);
  }, [])

  useEffect(() => {
    setPage(pathname.slice(1));
  }, [pathname])

  const  pageRouter = () => {
    if (page === "") {
      return (
        <HomeContainer>
          <HomeTitle>Let's get started by uploading a picture</HomeTitle>
          <SearchBar setAnime={setAnime} setPage={setPage} setModal={setModal}/>
        </HomeContainer>
      )
    }
    if (page === 'Search') {
      return (
        <SearchContainerStyle>
          <SearchBar setAnime={setAnime} setPage={setPage} setModal={setModal}/>
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
      {modal ? (<LoadingModal modal={modal}/>) : null}
      <NavBarStyle>
        <LogoSpan>
          <LogoText onClick={() => navigate('/')} className={page === "" ? "clicked" : ""}>
            ANIMELIST
          </LogoText>
        </LogoSpan>
        <SearchSpan onClick={() => navigate('/Search')} className={page === "Search" ? "clicked" : ""}>
          Search Anime
        </SearchSpan>
        <SavedSpan onClick={() => navigate('/Saved')} className={page === "Saved" ? "clicked" : ""}>
          Saved Anime
        </SavedSpan>
      </NavBarStyle>
      {pageRouter()}
    </>
  )
}

export default App;