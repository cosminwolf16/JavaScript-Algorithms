function sort(arr) {
  const resultArray = [...arr];

  for (let outer = 0; outer < resultArray.length; outer++) {
    let outerElement = resultArray[outer];
    console.log('OUTER LOOP');
    console.log(outerElement);

    for (let inner = outer + 1; inner < resultArray.length; inner++) {
      let innerElement = resultArray[inner];
      console.log('INNER LOOP');
      console.log('outerEl: ' + outerElement);
      console.log('innerEl: ' + innerElement);

      if (outerElement > innerElement) {
        resultArray[outer] = innerElement;
        resultArray[inner] = outerElement;

        outerElement = resultArray[outer];
        innerElement = resultArray[inner];
        console.log('INSIDE IF');
        console.log(resultArray);
      }
    }
  }

  return resultArray;
}

const sortedArray = sort([3, 2, 1]);
console.log(sortedArray);
