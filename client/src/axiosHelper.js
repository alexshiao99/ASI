const axios = require('axios');

const getDetails = (id) => {
  return axios.get(`/MAL/${id}`);
};

const sendImage = (image) => {
  return axios.post('/image', image);
};

const searchUrl = (url) => {
  return axios.get('/URL', {
    params: {
      imgUrl: url
    }
  });
};

const saveAnime = (anime) => {
  return axios.post('/save', anime);
};

const getList = () => {
  return axios.get('/list');
};

const incrementEpisode = (id) => {
  return axios.put(`/increment/${id}`)
};

const decrementEpisode = (id) => {
  return axios.put(`/decrement/${id}`)
};

module.exports = {
  getDetails,
  sendImage,
  searchUrl,
  saveAnime,
  getList,
  incrementEpisode,
  decrementEpisode
}