function insertionSort(array) {
  const n = array.length;

  for (let i = 1; i < n; i++) {
    let current = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = current;
  }

  return array;
}

console.log(insertionSort([2, 16, 6, 29, 13, 50]));
