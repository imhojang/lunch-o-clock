const express = require('express');
const Person = require('./models/Person');

const router = express.Router();

router.get('/people', async (req, res) => {
  let people = await Person.find();
  res.json(people);
});

router.post('/people', async (req, res) => {
  const { name } = req.query;
  const newPerson = await new Person({ name });
  newPerson.save((err, person) => {
    if (err) {
      console.log('console.error', err);
      return res.status(500).send('Internal Server Error');
    }
    console.log(person.name + ' saved to people collection');
  });

  return res.json(newPerson);
});
module.exports = router;
