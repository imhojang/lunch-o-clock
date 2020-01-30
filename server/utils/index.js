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

module.exports = { removeExtraWhiteSpaces, isDuplicateName }