const express = require('express')
const Person = require('./models/Person')

const router = express.Router()

const removeExtraWhiteSpaces = str => {
  return str.replace(/^\s+|\s+$/g, '').replace(/\s+/g, ' ')
}

const isDuplicateName = (name, people) => {
  let isDuplicate = false

  people.forEach(person => {
    if (person.name.toLowerCase() === name.toLowerCase()) {
      isDuplicate = true
    }
  })

  return isDuplicate
}

router.get('/people', async (req, res) => {
  let people = await Person.find()
  res.json(people)
})

router.post('/people', async (req, res) => {
  const name = removeExtraWhiteSpaces(req.query.name)
  const people = await Person.find()

  if (isDuplicateName(name, people)) {
    console.log(`The following name "${name}" already exists`) // eslint-disable-line no-console
    res.status(400).send(`${name} already exists`)
  } else {
    const newPerson = await new Person({ name })
    newPerson.save((err, person) => {
      if (err) {
        console.log('console.error', err.message) // eslint-disable-line no-console
        return res.status(500).send('Internal Server Error')
      } else {
        console.log(`Successfully saved ${person.name} to people collection`) // eslint-disable-line no-console
        return res.json(person)
      }
    })
  }
})

router.delete('/people', async (req, res) => {
  const { name } = req.query
  const deletedPerson = await Person.findOneAndDelete({ name })
  if (deletedPerson) {
    console.log(`Successfully removed ${deletedPerson.name} from people collection`) // eslint-disable-line no-console
    res.json(deletedPerson)
  } else {
    res.status(400)
  }
  // if not correctly deleted, return 500 internal server error
})

module.exports = router
