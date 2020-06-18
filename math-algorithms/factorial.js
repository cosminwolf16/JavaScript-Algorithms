// function factorial(number) {
//   let result = 1;
//   for (let i = 2; i <= number; i++) {
//     result *= i;
//   }
//   return result;
// }

function factorialRec(num) {
  if (num <= 1) {
    return 1;
  }
  return num * factorialRec(num - 1);
}

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
