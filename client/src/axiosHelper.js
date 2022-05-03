const axios = require('axios');

const getDetails = (id) => {
  return axios.get(`/${id}`)
}

const sendImage = (image) => {
  return axios.post('/image', image)
}
module.exports = {
  getDetails,
  sendImage
}