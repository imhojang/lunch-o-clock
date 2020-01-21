const express = require('express');
const Person = require('./models/Person');

const router = express.Router();

router.get('/people', async (req, res) => {
  let people = await Person.find();
  res.json({people});
});

module.exports = router;
