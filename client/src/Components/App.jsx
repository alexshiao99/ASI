import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar.jsx';
import SearchPreview from './SearchPreview.jsx';
import SearchDetails from './SearchDetails.jsx';
import SearchContainerStyle from './Styles/SearchContainerStyle.js';
import ResultsStyle from './Styles/ResultsStyle.js';
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
      {pageRouter()}
    </>
  )
}

export default App;