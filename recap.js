function cartProduct(setA, setB) {
  const product = [];

  for (let setAEl of setA) {
    if (!Array.isArray(setAEl)) {
      setAEl = [setAEl];
    }

    for (const setBEl of setB) {
      product.push([...setAEl, setBEl]);
    }
  }
  return product;
}

function cartesian(...sets) {
  let tempProduct = sets[0];

  for (let i = 1; i < sets.length; i++) {
    tempProduct = cartProduct(tempProduct, sets[i]);
  }
  return tempProduct;
}

const colors = ['blue', 'black', 'white'];
const sizes = ['l', 'm', 's'];
const styles = ['round neck', 'v neck'];

console.log(cartesian(colors, sizes, styles));
