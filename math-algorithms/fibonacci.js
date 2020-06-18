// Fibonacci problem
function fibonacci(n) {
  let seq = [1, 1];
  for (let i = 2; i < n + 1; i++) {
    seq.push(seq[i - 2] + seq[i - 1]);
  }
  return seq[n];
}

// 1 1 2 3 5 8 13 21 34
// console.log(fibonacci(0));
// console.log(fibonacci(1));
// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(7));
// console.log(fibonacci(8));
let counter = 0;
function fib(n, memo) {
  counter++;
  let result;
  if (memo[n]) {
    return memo[n];
  }
  if (n === 0 || n === 1) {
    result = 1;
  } else {
    result = fib(n - 1, memo) + fib(n - 2, memo);
  }
  memo[n] = result;
  return result;
}

fib(2, {});
console.log(counter);
counter = 0;

fib(3, {});
console.log(counter);
counter = 0;

fib(4, {});
console.log(counter);
counter = 0;

fib(5, {});
console.log(counter);
counter = 0;

fib(6, {});
console.log(counter);
counter = 0;

fib(20, {});
console.log(counter);
counter = 0;

fib(30, {});
console.log(counter);
counter = 0;
