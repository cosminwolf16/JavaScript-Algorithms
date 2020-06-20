const sumUp = (n) => {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result += i;
  }
  return result;
};

// const output1 = console.log(sumUp(5)); // 1 + 2 + 3 + 4 + 5 = 15

const sumOfArray = (arr) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
};

// const output2 = console.log(sumOfArray([1, 2, 3]));
