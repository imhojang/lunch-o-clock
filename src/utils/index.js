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
