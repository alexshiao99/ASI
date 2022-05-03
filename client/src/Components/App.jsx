import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar.jsx';
import SearchPreview from './SearchPreview.jsx';
import SearchDetails from './SearchDetails.jsx';
import SearchContainerStyle from './Styles/SearchContainerStyle.js';
import ResultsStyle from './Styles/ResultsStyle.js';
const axios = require('axios');

function App() {
  let [page, setPage] = useState('Search');
  const  pageRouter = () => {
    if (page === 'Search') {
      return (
        <SearchContainerStyle>
          <SearchBar />
          <ResultsStyle>
            <SearchPreview />
            <SearchDetails />
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