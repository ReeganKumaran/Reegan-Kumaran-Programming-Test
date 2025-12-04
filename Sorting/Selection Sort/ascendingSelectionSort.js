const selectionSort = (arr) => {
  const temp = [...arr];
  for (let i = 0; i < temp.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < temp.length; j++) {
      if (temp[j] < temp[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      const swap = temp[i];
      temp[i] = temp[minIndex];
      temp[minIndex] = swap;
    }
  }
  return temp;
};

console.log(selectionSort([5, 4, 2, 6, 1, 3]));
