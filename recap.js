function sort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  if (arr.length === 2) {
    return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
  }

  let middle = Math.floor(arr.length / 2);
  let leftArray = arr.slice(0, middle);
  let rightArray = arr.slice(middle);

  let sortedLeftArray = sort(leftArray);
  const sortedRightArray = sort(rightArray);

  let mergedArr = [];
  let rightIndex = 0;
  let leftIndex = 0;

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

console.log(sort([6, 2, 9, 1, 3, 5, 6, 7]));
