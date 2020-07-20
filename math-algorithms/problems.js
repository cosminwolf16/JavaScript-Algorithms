// Divided by 2 algorithm
function dividedBy2(arr) {
  let elements = [];
  for (const number of arr) {
    if (number % 2 === 0) {
      elements.push(number);
    }
  }
  return elements;
}
// console.log(dividedBy2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));

// Return primes from array
function returnPrimes(arr) {
  let primes = [];
  function isPrime(num) {
    for (let i = num - 1; i >= 2; i--) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  for (const number of arr) {
    if (isPrime(number)) {
      primes.push(number);
    }
  }
  return primes;
}
// console.log(
//   returnPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 19])
// );

// Return how many times a number is present in a list
function howManyTimesNIsPresent(arr, el) {
  let times = 0;
  for (const element of arr) {
    if (element === el) {
      times++;
    }
  }
  return times;
}
// console.log(howManyTimesNIsPresent([1, 1, 3, 4, 5, 6, 7, 8, 8, 1, 3, 5, 1], 1));

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
  let elements = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        elements.push(arr1[i]);
      }
    }
  }
  return elements;
}
// const list1 = [1, 2, 3, 4, 5, 6, 7, 11];
// const list2 = [2, 6, 7, 8, 9, 0, 11];
// console.log(commonElements(list1, list2));

// Return common elements and how many times they are present
function commonElements2(arr1, arr2) {
  let dict = {};
  for (const el1 of arr1) {
    for (const el2 of arr2) {
      if (el1 === el2) {
        if (el1 in dict) {
          dict[el1]++;
        } else {
          dict[el1] = 1;
        }
      }
    }
  }
  return dict;
}
// const list1 = [1, 2, 3, 4, 5, 6, 7, 7, 1, 1];
// const list2 = [2, 6, 7, 8, 9, 0, 11, 7, 1, 1];
// console.log(commonElements2(list1, list2));
