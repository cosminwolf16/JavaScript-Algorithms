function quickSort(list) {
  const copiedList = [...list];

  if (copiedList.length < 2) {
    return copiedList;
  }

  const smallElementsArray = [];
  const largeElementsArray = [];
  const pivotElement = copiedList.shift();
  const middleElementsArray = [pivotElement];

  while (copiedList.length) {
    const currentElement = copiedList.shift();
    if (currentElement === pivotElement) {
      middleElementsArray.push(currentElement);
    } else if (currentElement < pivotElement) {
      smallElementsArray.push(currentElement);
    } else {
      largeElementsArray.push(currentElement);
    }
  }

  const sortedSmallArray = sort(smallElementsArray);
  const sortedLargeArray = sort(largeElementsArray);
  return sortedSmallArray.concat(middleElementsArray, sortedLargeArray);
}

const output = sort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
console.log(output);
