function factorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5)); // 5 x 4 x 3 x 2 x1
