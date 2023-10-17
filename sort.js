function bubbleSort(array) {
  let lastSwapIndex = array.length - 1;
  while (true) {
    let newLastSwapIndex = 0;
    for (let i = 0; i < lastSwapIndex; i++) {
      const left = array[i];
      const right = array[i + 1];
      if (left > right) {
        array[i] = right;
        array[i + 1] = left;
        newLastSwapIndex = i;
      }
    }
    if (lastSwapIndex == newLastSwapIndex) {
      break;
    }
    lastSwapIndex = newLastSwapIndex;
  }
  return array;
}

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let right = array[i];
    for (let k = i - 1; k >= 0; k--) {
      let left = array[k];
      if (right < left) {
        array[k] = right;
        array[k + 1] = left;
      } else {
        break;
      }
    }
  }
  return array;
}
