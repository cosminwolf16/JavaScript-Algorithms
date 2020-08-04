// Divided by 2 algorithm
function dividedBy2(arr) {
  let dividedBy2 = [];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] % 2 === 0) {
      dividedBy2.push(arr[index]);
    }
  }
  return dividedBy2;
}
// console.log(dividedBy2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));

// Return primes from array
function returnPrimes(arr) {
  let primes = [];
  function isPrime(num) {
    for (let index = num - 1; index >= 2; index--) {
      if (num % index === 0) {
        return false;
      }
    }
    return true;
  }
  for (let index = 0; index < arr.length; index++) {
    if (isPrime(arr[index])) {
      primes.push(arr[index]);
    }
  }
  return primes;
}
// console.log(
//   returnPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 19])
// );

// Return how many times a number is present in a list
function howManyTimesNIsPresent(arr, el) {
  let count = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === el) {
      count++;
    }
  }
  return count;
}
// console.log(howManyTimesNIsPresent([1, 1, 3, 4, 5, 6, 7, 8, 8, 1, 3, 5, 1], 7));

// Return true or false if a number is present in a list or not
function isElPresent(arr, el) {
  for (const element of arr) {
    if (element === el) {
      return true;
    }
  }
  return false;
}
// console.log(isElPresent([1, 2, 3, 4, 5, 6, 7], 5));

// Return common elements from two lists
function commonElements(arr1, arr2) {
  let commonElements = [];
  for (const el1 of arr1) {
    for (const el2 of arr2) {
      if (el1 === el2) {
        commonElements.push(el1);
      }
    }
  }
  return commonElements;
}
// const list1 = [1, 2, 3, 4, 5, 6, 7, 11];
// const list2 = [2, 6, 7, 8, 9, 0, 11];
// console.log(commonElements(list1, list2));

// Return common elements and how many times they are present
function commonElements2(arr1, arr2) {
  let entries = {};
  for (const el1 of arr1) {
    for (const el2 of arr2) {
      if (el1 === el2) {
        if (el1 in entries) {
          entries[el1]++;
        } else {
          entries[el1] = 1;
        }
      }
    }
  }
  return entries;
}
// const list1 = [1, 2, 3, 4, 5, 6, 7, 7, 1, 1];
// const list2 = [2, 6, 7, 8, 9, 0, 11, 7, 1, 1];
// console.log(commonElements2(list1, list2));
