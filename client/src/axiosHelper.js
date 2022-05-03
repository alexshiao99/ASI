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

module.exports = {
  getDetails,
  sendImage,
  searchUrl,
}