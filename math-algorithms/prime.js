// IsPrime problem
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// Best Case: numbers = 1 OR number = 2 => O(1)
// Average Case: O(n) (Improved: O(sqrt(n)))
// Worst Case: number = 27,277 => O(n) (Improved: O(sqrt(n)))

console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(6));
console.log(isPrime(9));
console.log(isPrime(11));
console.log(isPrime(12));
