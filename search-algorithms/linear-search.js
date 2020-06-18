function findElement(list, element, comparatorFc) {
  let index = 0;
  for (const value of list) {
    if (
      typeof element === 'object' &&
      element !== null &&
      comparatorFc(element, value)
    ) {
      return index;
    }
    if (value === element) {
      return index;
    }
    index++;
  }
}

const list = [1, 9, 10, 55, -54];
const beeings = [
  { name: 'Cosmin', age: 21 },
  { name: 'George', age: 27 },
  { name: 'Mircea', age: 21 },
  { name: 'Ani', age: 43 },
];

console.log(
  findElement(beeings, { name: 'Cosmin', age: 21 }, (el, it) => {
    return el.name === it.name;
  })
);
