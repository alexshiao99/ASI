const AnimeList = require('../models/models.js');

const incrementEpisode = (req, res) => {

};

const getList = (req, res) => {
  AnimeList.find({})
  .then((data) => res.send(data))
  .catch((err) => console.log(err));
};

const decrementEpisode = (req, res) => {

};

const postAnime = (req, res) => {

};

module.exports = {
  incrementEpisode,
  decrementEpisode,
  postAnime,
  getList
};


