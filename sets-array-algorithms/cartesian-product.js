function cartProduct(setA, setB) {
  let products = [];
  for (let setAEl of setA) {
    for (const setBEl of setB) {
      if (!Array.isArray(setAEl)) {
        setAEl = [setAEl];
      }
      products.push([...setAEl, setBEl]);
    }
  }
  return products;
}

function cartesian(...sets) {
  let tempProduct = sets[0];

  for (let i = 1; i < sets.length; i++) {
    tempProduct = cartProduct(tempProduct, sets[i]);
  }
  return tempProduct;
}

const classes = ['warrior', 'warlock', 'hunter'];
const races = ['elf', 'orc', 'human'];
const faction = ['alliance', 'horde'];
console.log(cartesian(classes, races, faction));
