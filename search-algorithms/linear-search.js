function findElement(elements, element, comparatorFc) {
  let index = 0;
  for (const el of elements) {
    if (typeof el === 'object' && el !== null && comparatorFc(el, element)) {
      return index;
    }
    if (el === element) {
      return index;
    }
    index++;
  }
}

const list = [1, 9, 10, 55, -54];
const objects = [
  { name: 'Cosmin', age: 21 },
  { name: 'George', age: 27 },
  { name: 'Mircea', age: 21 },
  { name: 'Ani', age: 43 },
];

console.log(
  findElement(objects, { name: 'Mircea', age: 21 }, (el, element) => {
    return el.name === element.name && el.age === element.age;
  })
);
