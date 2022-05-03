const Routers = require('express').Router();
const axios = require('axios');
const API = require('../config');

Routers.get('/:idMal', (req, res) => {
  axios.get(`https://api.myanimelist.net/v2/anime/${req.params.idMal}`, {
    headers: { "X-MAL-CLIENT-ID": API.TOKEN },
    params: {
      fields:
        `id,title,main_picture,start_date,
        end_date,synopsis,mean,rank,popularity,
        media_type,genres,my_list_status,
        num_episodes,start_season,rating,studios`
    },
  })
    .then((data) => res.send(data.data))
    .catch((err) => console.log(err));
});

module.exports = Routers;