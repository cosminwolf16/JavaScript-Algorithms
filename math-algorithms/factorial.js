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

console.log(factorialRec(2)); //
console.log(factorialRec(3)); //
console.log(factorialRec(4)); //
console.log(factorialRec(5)); //
