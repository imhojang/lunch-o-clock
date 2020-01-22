const express = require('express');
const Person = require('./models/Person');

const router = express.Router();

const removeExtraWhiteSpaces = str => {
  return str.replace(/^\s+|\s+$/g, '').replace(/\s+/g, ' ');
};

const isDuplicateName = async name => {
  const people = await Person.find();
  let isDuplicate = false;

  people.forEach(person => {
    if (person.name.toLowerCase() === name.toLowerCase()) {
      isDuplicate = true;
    }
  });
  return isDuplicate;
};

router.get('/people', async (req, res) => {
  let people = await Person.find();
  res.json(people);
});

router.post('/people', async (req, res) => {
  const name = removeExtraWhiteSpaces(req.query.name);

  if (await isDuplicateName(name)) {
    console.log(`The following name "${name}" already exists`);
    res.status(400).send(`${name} already exists`);
  } else {
    const newPerson = await new Person({ name });
    newPerson.save((err, person) => {
      if (err) {
        console.log('console.error', err.message);
        return res.status(500).send('Internal Server Error');
      } else {
        console.log(person.name + ' saved to people collection');
        return res.json(person);
      }
    });
  }
});

module.exports = router;
