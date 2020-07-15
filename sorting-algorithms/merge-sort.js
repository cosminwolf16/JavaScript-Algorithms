function sort(arr) {
  // if the array's length is smaller than 2, return the array.
  if (arr.length < 2) {
    return arr;
  }
  // if the array's length is equal to 2, sort the array from small to large
  if (arr.length === 2) {
    return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
  }
  // find middle index of the array + split the array into LeftArray and RightArray
  const middle = Math.floor(arr.length / 2);
  let leftArray = arr.slice(0, middle);
  let rightArray = arr.slice(middle);
  // after: sort both arrays and store them in new variables.
  let leftSortedArray = sort(leftArray);
  let rightSortedArray = sort(rightArray);
  // init mergedArray and get/store starting index of both left and right list
  const mergedArray = [];
  let leftArrayIndex = 0;
  let rightArrayIndex = 0;
  // while left and right index are smaller than left and right list length
  while (
    leftArrayIndex < leftSortedArray.length ||
    rightArrayIndex < rightSortedArray.length
  ) {
    if (
      leftArrayIndex >= leftSortedArray.length ||
      leftSortedArray[leftArrayIndex] > rightSortedArray[rightArrayIndex]
    ) {
      mergedArray.push(rightSortedArray[rightArrayIndex]);
      rightArrayIndex++;
    } else {
      mergedArray.push(leftSortedArray[leftArrayIndex]);
      leftArrayIndex++;
    }
  }
  return mergedArray;
}
const sortedArray = sort([11, 10, 5, 2, 1, 7, 8, 9, 3, 4, 6]);
console.log(sortedArray);
