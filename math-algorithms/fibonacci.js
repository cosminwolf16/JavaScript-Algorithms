// Fibonacci problem
function fibonacci(n) {
  const seq = [1, 1];
  for (let i = 2; i < n + 1; i++) {
    seq.push(seq[i - 2] + seq[i - 1]);
  }
  return seq[n];
}

// 1 1 2 3 5 8 13 21 34
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));
console.log(fibonacci(8));
