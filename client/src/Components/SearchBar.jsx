import React, {useState} from 'react';
import SearchBarStyle from './Styles/SearchBarStyle.js';
import { UploadLabel, UploadInput } from './Styles/UploadInputStyle.js';
const FormData = require('form-data');
const axiosHelper = require('../axiosHelper');

function SearchBar({}) {
  const [uploadImg, setUploadImg] = useState(null);
  const handleUpload = (image) => {
    const formData = new FormData()
    setUploadImg(image);
    formData.append("image", image);
    axiosHelper.sendImage(formData);
  }
  return (
    <SearchBarStyle>
      <input className="urlSearchBar" type="text" placeholder="Enter a url..."></input>
      <button className="Btn">Search</button>
      <UploadLabel for="file-upload" className="Btn">Upload</UploadLabel>
      <UploadInput
        id = "file-upload"
        type="file"
        onChange={(event) => {
          handleUpload(event.target.files[0]);
        }}
      />
      {uploadImg && (
        <div>
        <img alt="not fount" width={"250px"} src={URL.createObjectURL(uploadImg)} />
        </div>
      )}
    </SearchBarStyle>
  )
}

export default SearchBar;