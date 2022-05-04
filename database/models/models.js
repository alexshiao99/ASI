const mongoose = require('mongoose');

const animeListSchema = mongoose.Schema({
  en: {type: String, required: true},
  ja: {type: String, required: true},
  totalEp: {type: Number, required: true},
  currentEp: {type: Number, required: true},
  rating: {type: Number, required: true}
});

const AnimeList = mongoose.model('AnimeList', animeListSchema);

module.exports = AnimeList;