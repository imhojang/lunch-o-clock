export const shuffleArray = arr => {
  let shuffledArr = arr.slice()
  let m = shuffledArr.length
  let temp, i

  while (m) {
    i = Math.floor(Math.random() * m--)

    temp = shuffledArr[m]
    shuffledArr[m] = shuffledArr[i]
    shuffledArr[i] = temp
  }

  return shuffledArr
}

export const chunkArrayBySize = (array, size) => {
  const chunks = []
  let index = 0

  while (index < array.length) {
    let chunk = array.slice(index, index + size)
    if (chunk.length < size) {
      let lastChunk = chunks.pop()
      chunk = lastChunk.concat(chunk)
    }
    chunks.push(chunk)
    index += size
  }

  return chunks
}

export const chunkArrayByCount = (array, count) => {
  const chunks = []
  let index = 0
  let increment = Math.floor(array.length / count)
  while (index < array.length) {
    let chunk = array.slice(index, index + increment)
    if (chunks.length === count) {
      let lastChunk = chunks.pop()
      chunk = lastChunk.concat(chunk)
    }
    chunks.push(chunk)
    index += increment
  }
  return chunks
}

export const checkGroupSize = (people, groupSize) => {
  const numberOfPeople = people.length
  let result = false
  if (numberOfPeople === 0) {
    alert(
      'Group cannot be created! Please add at least one person to the list to create a group.'
    )
    result = false
  } else if (groupSize < 1) {
    alert(
      'Group cannot be created! Please select a number greater than or equal to 1.'
    )
    result = false
  } else if (groupSize > numberOfPeople) {
    alert(
      `Group cannot be created! Please select a number less than or equal to Number of people: ${numberOfPeople}.`
    )
    result = false
  } else {
    result = true
  }
  return result
}

export const isDuplicateName = (name, people) => {
  let isDuplicate = false

  people.forEach(person => {
    if (person.name.toLowerCase() === name.toLowerCase()) {
      return (isDuplicate = true)
    }
  })

  return isDuplicate
}

export const removeExtraWhiteSpace = str => {
  return str.replace(/^\s+|\s+$/g, '').replace(/\s+/g, ' ')
}
