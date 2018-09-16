const express = require('express');
const axios = require('axios');
const router = express.Router();

const SEED = 'BuiltLabs';
const USER_API_URL = 'https://randomuser.me/api';

router.get('/', function(req, res, next) {
  const page = req.query.page || 1;
  const size = req.query.size || 12;

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
  }).catch((err) => {
    res.json({
      success: false,
      message: 'An error has occured.',
    });
    next(err);
  });
});

module.exports = router;
