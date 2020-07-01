function sort(arr) {
  const copiedArray = [...arr];
  console.log('FUNCTION STARTING');
  console.log(arr);

  if (copiedArray.length <= 1) {
    console.log('ONLY ONE ITEM - RETURNING');
    console.log(copiedArray);
    return copiedArray;
  }

  const smallerElementsArray = [];
  const biggerElementsArray = [];
  const pivotElement = copiedArray.shift();
  const centerElementsArray = [pivotElement];

  while (copiedArray.length) {
    const currentElement = copiedArray.shift();
    if (currentElement === pivotElement) {
      centerElementsArray.push(currentElement);
    } else if (currentElement < pivotElement) {
      smallerElementsArray.push(currentElement);
    } else {
      biggerElementsArray.push(currentElement);
    }
  }
  console.log('AFTER WHILE');
  console.log(smallerElementsArray);
  console.log(centerElementsArray);
  console.log(biggerElementsArray);

  const smallerElementsSortedArray = sort(smallerElementsArray);
  const biggerElemenetsSortedArray = sort(biggerElementsArray);
  return smallerElementsSortedArray.concat(
    centerElementsArray,
    biggerElemenetsSortedArray
  );
}

const output = sort([10, 5, 2, 3, 1]);
console.log(output);
