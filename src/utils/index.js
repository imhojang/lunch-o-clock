export const fisherYatesShuffle = (arr) => {
  let m = arr.length;
  let temp;
  let i;

  while (m) {
    i = Math.floor(Math.random() * m--);

    temp = arr[m];
    arr[m] = arr[i];
    arr[i] = temp;   
  }
  
  return arr;
}