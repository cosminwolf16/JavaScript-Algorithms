function factorial(number) {
  let result = 1;
  for (let i = number; i >= 1; i--) {
    result *= i;
  }
  return result;
}
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));

function factorialRec(num) {
  if (num <= 1) {
    return 1;
  }
  return num * factorialRec(num - 1);
}

// let counter = 0;
