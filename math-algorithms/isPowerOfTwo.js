function isPowerOfTwo(number) {
  let dividedNumber = number;
  if (number < 1) {
    return false;
  }
  while (dividedNumber !== 1) {
    if (dividedNumber % 2 !== 0) {
      return false;
    }
    dividedNumber /= 2;
  }
  return true;
}

function isPowerOfTwo2(number) {
  if (number < 1) {
    return false;
  }
  return (number & (number - 1)) === 0;
}

// Best Case: number 13 => O(1)
// Average Case: O(log n)
// Worst Case: 1,125,899,906,842,624 =>  O(log n)

console.log(isPowerOfTwo2(4));
console.log(isPowerOfTwo2(8));
console.log(isPowerOfTwo2(16));
console.log(isPowerOfTwo2(64));
console.log(isPowerOfTwo2(9));
console.log(isPowerOfTwo2(10));
