function isPowerOfTwo(number) {
  while (number !== 1) {
    if (number % 2 !== 0) {
      return false;
    }
    number /= 2;
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

console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(64));
console.log(isPowerOfTwo(9));
console.log(isPowerOfTwo(10));
