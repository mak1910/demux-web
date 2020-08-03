const express = require('express');
const router = express.Router();

const axios = require('axios');

const OMDB_API_KEY = process.env.OMDB_API_KEY;
const OMDB_URL = process.env.OMDB_URL;

/* Hello World */
router.get('/', function(req, res, next) {
    // A middleware should either return a response
    // Via the response object, or it should call next()
    next();
});

/* Hello World */
router.get('/', function (req, res, next) {
    res.send("Hello World");
});

/* IMDB Search */
router.get('/search', (req, res, next) => {
  const title = req.query.title
  const url = `${OMDB_URL}?apikey=${OMDB_API_KEY}&s=${title}`
  axios.get(url)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      res.send(err)
    })
});

/* Single IMDB Movie */
router.get('/imdb/:imdbId', (req, res, next) => {
  const imdbId = req.params.imdbId
  const url = `${OMDB_URL}?apikey=${OMDB_API_KEY}&i=${imdbId}`
  axios.get(url)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      res.send(err)
    })
})

module.exports = router;
