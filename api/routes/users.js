const express = require('express');
const axios = require('axios');
const router = express.Router();

const SEED = 'BuiltLabs';
const USER_API_URL = 'https://randomuser.me/api';

router.get('/', function(req, res) {
  const page = req.query.page;
  const size = req.query.size;

  axios.get(USER_API_URL, { params: {
    page,
    results: size,
      seed: SEED,
  }}).then((response) => {
    res.json({
      success: true,
      users: response.data.results,
      info: {
        size: response.data.info.results,
        page: response.data.info.page,
      },
    });
  }).catch((error) => {
    // TODO: log error
    res.json({
      success: false,
      message: 'An error has occured.',
    });
  });
});

module.exports = router;
