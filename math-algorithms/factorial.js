function factorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
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

console.log(factorialRec(2));
console.log(factorialRec(3));
console.log(factorialRec(4));
