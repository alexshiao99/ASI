import React, { useState, useEffect } from 'react';
import SavedListEntry from './SavedListEntry.jsx';
import { SavedListDiv } from './Styles/SavedListStyle.js';
const axiosHelper = require('../axiosHelper');

function SavedList({ page }) {
  let [list, setList] = useState([]);

  useEffect(() => {
    axiosHelper.getList()
    .then((data) => setList(data.data))
    .catch((err) => console.log(err));
  }, [page])

  return (
    <SavedListDiv>
      {list.map((savedAnime) => {
        return <SavedListEntry key={savedAnime._id} savedAnime={savedAnime}/>
      })}
    </SavedListDiv>
  )
}

export default SavedList;