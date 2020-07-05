function findElement(sortedArr, element) {
  let startIndex = 0;
  let endIndex = sortedArr.length - 1;

  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

    if (sortedArr[middleIndex] === element) {
      return middleIndex;
    }
    if (sortedArr[middleIndex] > element) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }
}

const arr = [1, 5, 9, 13, 99, 53, 2, 3, 74, 100]; //

console.log(findElement(arr, 100));
