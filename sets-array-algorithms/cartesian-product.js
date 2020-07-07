function cartProduct(setA, setB) {
  const product = [];

  for (const setAEl of setA) {
    for (const setBEl of setB) {
      product.push([setAEl, setBEl]);
    }
  }
  return product;
}

const colors = ['blue', 'red'];
const sizes = ['L', 'M'];
console.log(cartProduct(colors, sizes)); // [["blue, "m""], ....]
