const bubbleSorting = (arr) => {
  const temp = [...arr];
  for (let i = 0; i < temp.length; i++) {
    for (let j = 0; j < temp.length - i ; j++) {
      if (temp[j] < temp[j + 1]) {
        const min = temp[j + 1];
        temp[j + 1] = temp[j];
        temp[j] = min;
      }
    }
  }
  return temp;
};
console.log(bubbleSorting([6, 5, 3, 1, 2, 8, 7]));
