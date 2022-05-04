import React, { useState, useEffect } from 'react';
import { ListEntryDiv, ListImg, ListValue, ListDetails} from './Styles/SavedListStyle.js';
import { IncrementDiv, CrementButton, EpTitle, IncrementButtonContainer } from './Styles/SavedListStyle.js';
const axiosHelper = require('../axiosHelper');

function SavedListEntry({ savedAnime }) {
  let [epCount, setEpCount] = useState(savedAnime.currentEp);
  const increment = () => {
    setEpCount(previous => previous + 1)
    axiosHelper.incrementEpisode(savedAnime._id)
    .catch((err) => console.log(err));
  }
  const decrement = () => {
    setEpCount(previous => previous - 1)
    axiosHelper.decrementEpisode(savedAnime._id)
    .catch((err) => console.log(err));
  }
  return (
    <ListEntryDiv>
      <ListImg src={savedAnime.image} />
      <ListDetails>
        <ListValue>{savedAnime.en}</ListValue>
        <ListValue>{savedAnime.ja}</ListValue>
        <ListValue>Rating: {savedAnime.rating}</ListValue>
      </ListDetails>
      <IncrementDiv>
        <EpTitle>Progress</EpTitle>
        <IncrementButtonContainer>
          <CrementButton className={epCount === 0 ? "hidden": ""} onClick={() => decrement()}>-</CrementButton>
          <ListValue>{epCount} / {savedAnime.totalEp}</ListValue>
          <CrementButton className={epCount === savedAnime.totalEp ? "hidden": ""} onClick={() => increment()}>+</CrementButton>
        </IncrementButtonContainer>
      </IncrementDiv>
    </ListEntryDiv>
  )

};

export default SavedListEntry;