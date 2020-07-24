function sort(arr) {
  let coppiedArr = [...arr];

  if (coppiedArr.length < 2) {
    return coppiedArr;
  }

  const smallElementsArray = [];
  const largeElementsArray = [];
  const pivotElement = coppiedArr.shift();
  const middleElementsArray = [pivotElement];

  while (coppiedArr.length) {
    const currentElement = coppiedArr.shift();

    if (currentElement === pivotElement) {
      middleElementsArray.push(currentElement);
    } else if (currentElement < pivotElement) {
      smallElementsArray.push(currentElement);
    } else {
      largeElementsArray.push(currentElement);
    }
    const sortedSmallElementsArray = sort(smallElementsArray);
    const sortedLargeElementsArray = sort(largeElementsArray);

    return sortedSmallElementsArray.concat(
      middleElementsArray,
      sortedLargeElementsArray
    );
  }
}
const output = sort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
console.log(output);
