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

  const deleteAnime = (id) => {
    axiosHelper.deleteAnime(id)
    .then(() => axiosHelper.getList())
    .then((data) => setList(data.data))
    .catch((err) => console.log(err));
  }
  return (
    <SavedListDiv>
      {list.map((savedAnime) => {
        return <SavedListEntry key={savedAnime._id} savedAnime={savedAnime} deleteAnime={deleteAnime}/>
      })}
    </SavedListDiv>
  )
}

export default SavedList;