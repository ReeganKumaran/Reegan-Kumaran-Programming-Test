const bubbleSorting = (arr) => {
  const temp = [...arr];
  for (let i = 1; i <= temp.length; i++) { // 1, 2, 3, 4, 5, 6
    for (let j = 0; j < temp.length - i -1; j++) { // 1, 2, 3, 4 //
      if (temp[j] > temp[j + 1]) {
        const min = temp[j + 1];
        temp[j + 1] = temp[j]
        temp[j] = min
      }
    }
  }
  return temp
};
console.log(bubbleSorting([3,5,1,2,6,7,8]))
