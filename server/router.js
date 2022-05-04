require('dotenv').config();
const Routers = require('express').Router();
const axios = require('axios');
const API = require('../config');
const cloudinary = require('cloudinary');
const dbControllers = require('../database/controllers/controllers');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

Routers.get('/MAL/:idMal', (req, res) => {
  axios.get(`https://api.myanimelist.net/v2/anime/${req.params.idMal}`, {
    headers: { "X-MAL-CLIENT-ID": API.TOKEN },
    params: {
      fields:
        `id,title,main_picture,start_date,
        end_date,synopsis,mean,rank,popularity,
        media_type,genres,my_list_status,
        num_episodes,start_season,rating,studios,alternative_titles`
    },
  })
    .then((data) => res.send(data.data))
    .catch((err) => console.log(err));
});

Routers.get('/URL', (req, res) => {
  axios.get('https://api.trace.moe/search', {
    params: {
      url: req.query.imgUrl,
      anilistInfo: true,
      cutBorders: true,
    }
  })
  .then((data) => res.send(data.data))
  .catch((err) => console.log(err));
})

Routers.post('/image', (req, res) => {
  const values = Object.values(req.files)
  const promises = values.map(image => cloudinary.uploader.upload(image.path))
  Promise
    .all(promises)
    .then(results => res.send(results[0].secure_url))
})

Routers.post('/save', dbControllers.postAnime);
Routers.get('/list', dbControllers.getList);
Routers.put('/increment/:id', dbControllers.incrementEpisode);
Routers.put('/decrement/:id', dbControllers.decrementEpisode);

module.exports = Routers;