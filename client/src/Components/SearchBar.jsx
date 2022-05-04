import React, {useState} from 'react';
import SearchBarStyle from './Styles/SearchBarStyle.js';
import { useNavigate } from 'react-router-dom';
import { UploadLabel, UploadInput } from './Styles/UploadInputStyle.js';
const FormData = require('form-data');
const axiosHelper = require('../axiosHelper');

function SearchBar({ setAnime, setPage, setModal }) {
  const [uploadImg, setUploadImg] = useState(null);
  const [searchUrl, setSearchUrl] = useState('');
  const navigate = useNavigate();

  const handleUpload = (image) => {
    setModal(previous => !previous);
    const formData = new FormData()
    setUploadImg(image);
    formData.append("image", image);
    axiosHelper.sendImage(formData)
    .then((url) => setSearchUrl(url.data))
    .catch((err) => alert("Can't find anything!!!!!!!"))
    .then(() => setModal(previous => !previous))
    .catch((err) => console.log(err));
  }

  const handleSearch = () => {
    setModal(previous => !previous);
    axiosHelper.searchUrl(searchUrl)
    .then((data) => {
      let i = 0;
      while (Math.floor(data.data.result[i].episode) < data.data.result[i].episode) {
        i++;
      }
      setAnime(data.data.result[i]);
    })
    .then(() => navigate("/Search"))
    .catch((err) => alert("Can't find anything!!!!!!!"))
    .then(() => setModal(previous => !previous))
    .catch((err) => console.log(err));
  }

  return (
    <SearchBarStyle>
      <input className="urlSearchBar" type="text" placeholder="Enter a url..." value={searchUrl} onChange={(e) => setSearchUrl(e.target.value)}></input>
      <button className="Btn" onClick={() => handleSearch()}>Search</button>
      <UploadLabel for="file-upload" className="Btn">Upload</UploadLabel>
      <UploadInput
        id = "file-upload"
        type="file"
        onChange={(event) => {
          handleUpload(event.target.files[0]);
        }}
      />
    </SearchBarStyle>
  )
}

export default SearchBar;