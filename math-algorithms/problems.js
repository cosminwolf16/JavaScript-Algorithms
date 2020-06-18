// The first algorithm should take an array of numbers as input and return the minimum value in the array (the smallest number)
function getMin(list) {
  let currentMin = list[0];
  for (const num of list) {
    if (num < currentMin) {
      currentMin = num;
    }
  }
  return currentMin;
}

const arr = [15, 20, 33, 67, 2, 9, 100];
// console.log(getMin(arr));

// The second algorithm should take a number as input and return true if its and even number or false for odd number
function isEven(n) {
  if (n % 2 === 0) {
    return true;
  }
  return false;
}

console.log(isEven(2));
