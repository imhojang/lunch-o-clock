export const shuffleArray = arr => {
  let shuffledArr = arr.slice();
  let m = shuffledArr.length;
  let temp, i;

  while (m) {
    i = Math.floor(Math.random() * m--);

    temp = shuffledArr[m];
    shuffledArr[m] = shuffledArr[i];
    shuffledArr[i] = temp;
  }

  return shuffledArr;
};

export const chunkArrayBySize = (array, size) => {
  const chunks = [];
  let index = 0;

  while (index < array.length) {
    let chunk = array.slice(index, index + size);
    if (chunk.length < size) {
      let lastChunk = chunks.pop();
      chunk = lastChunk.concat(chunk);
    }
    chunks.push(chunk);
    index += size;
  }

  return chunks;
};

export const chunkArrayByCount = (array, count) => {
  const chunks = [];
  let index = 0;
  let increment = Math.floor(array.length / count);
  console.log('increment', increment);
  while (index < array.length) {
    let chunk = array.slice(index, index + increment);
    if (chunks.length === count) {
      let lastChunk = chunks.pop();
      chunk = lastChunk.concat(chunk);
    }
    console.log('chunk', chunk);
    chunks.push(chunk);
    index += increment;

  }
  return chunks;
}

export const checkGroupSize = (people, groupSize) => {
  const numberOfPeople = people.length;
  let result = false;
  if (numberOfPeople === 0) {
    alert('Group cannot be created! Please add at least one person to the list to create a group.');
    result = false;
  } else if (groupSize < 1) {
    alert('Group cannot be created! Please select a number greater than or equal to 1.');
    return false;
  } else if (groupSize > numberOfPeople) {
    return alert(`Group cannot be created! Please select a number less than or equal to Number of people: ${numberOfPeople}.`);
  } else {
    result = true;
  }
  return result;
};
