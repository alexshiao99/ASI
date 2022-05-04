const AnimeList = require('../models/models.js');

const incrementEpisode = (req, res) => {
  AnimeList.findOneAndUpdate({_id: req.params.id}, {$inc: {'currentEp': 1}})
  .then((data) => res.send(data))
  .catch((err) => console.log(err));
};

const getList = (req, res) => {
  AnimeList.find({})
  .then((data) => res.send(data))
  .catch((err) => console.log(err));
};

const decrementEpisode = (req, res) => {
  AnimeList.findOneAndUpdate({_id: req.params.id}, {$inc: {'currentEp': -1}})
  .then((data) => res.send(data))
  .catch((err) => console.log(err));
};

const postAnime = (req, res) => {
  let { en, ja, image, totalEp, rating } = req.body;
  AnimeList.findOneAndUpdate(
    {en, ja},
    {$set: {en, ja, image, totalEp, rating }},
    {upsert: true, new: true}
  )
  .then((data) => res.send(data))
  .catch((err) => console.log(err));
};

module.exports = {
  incrementEpisode,
  decrementEpisode,
  postAnime,
  getList
};


