// The first algorithm should take an array of numbers as input and return the minimum value in the array (the smallest number)
function getMin(numbers) {
  let currentMin = numbers[0];
  for (const num of numbers) {
    if (currentMin > num) {
      currentMin = num;
    }
  }
  return currentMin;
}

const arr = [15, 20, 33, 67, 2, 9, 100, 1];
// console.log(getMin(arr));

// The second algorithm should take a number as input and return true if its and even number or false for odd number
function isEven(n) {
  if (n % 2 === 0) {
    return true;
  }
  return false;
}

// console.log(isEven(2));
// console.log(isEven(3));
// console.log(isEven(4));
// console.log(isEven(5));

function checkArr(arr) {
  let dictionar = {};

  for (const num of arr) {
    if (dictionar[num]) {
      dictionar[num]++;
    } else {
      dictionar[num] = 1;
    }
  }
  return dictionar;
}

console.log(checkArr([1, 2, 3, 4, 1, 2, 3, 1, 1, 5, 5]));
