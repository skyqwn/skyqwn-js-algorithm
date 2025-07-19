function bubbleSort(array) {
  const n = array.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}

console.log(bubbleSort([77, 42, 6, 4, 3, 5, 1, 35, 222]));
