function knapsack(items) {}

const items = [
  { name: 'a', value: 3, weight: 3 },
  { name: 'b', value: 6, weight: 8 },
  { name: 'c', value: 10, weight: 3 },
];

const allPermutations = knapsack(items);
console.log(allPermutations);
