function insetionSort(array) {
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

console.log(insetionSort([2, 6, 10, 29, 50, 13]));
