function sort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  if (arr.length === 2) {
    return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
  }

  const middle = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, middle);
  const rightArray = arr.slice(middle);

  const sortedLeftArray = sort(leftArray);
  const sortedRightArray = sort(rightArray);

  const mergedArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (
    leftIndex < sortedLeftArray.length ||
    rightIndex < sortedRightArray.length
  ) {
    if (
      leftIndex >= sortedLeftArray.length ||
      sortedLeftArray[leftIndex] > sortedRightArray[rightIndex]
    ) {
      mergedArr.push(sortedRightArray[rightIndex]);
      rightIndex++;
    } else {
      mergedArr.push(sortedLeftArray[leftIndex]);
      leftIndex++;
    }
  }
  return mergedArr;
}
console.log(sort([33, -22, -1, 1, 6, 16, 99]));
