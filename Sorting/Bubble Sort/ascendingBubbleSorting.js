const bubbleSorting = (arr) => {
  const temp = [...arr];
  for (let i = 1; i < temp.length; i++) {
    for (let j = 0; j < temp.length - i - 1; j++) {
      if (temp[j] > temp[j + 1]) {
        const min = temp[j + 1];
        temp[j + 1] = temp[j];
        temp[j] = min;
      }
    }
  }
  return temp;
};
console.log(bubbleSorting([3, 5, 1, 2, 6, 7, 8]));
