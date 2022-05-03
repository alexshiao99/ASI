const axios = require('axios');
const API = require('../../config');

const getDetails = (id) => {
  return axios.get(`/${id}`)
}
module.exports = {
  getDetails,
}