// Bottom-Up approach. We slowly increment the final product
function cartesian(...sets) {
  let tempProduct = sets[0];
  // Go through all the sets
  for (let i = 1; i < sets.length; i++) {
    tempProduct = cartProduct(tempProduct, sets[i]);
  }

  return tempProduct;
}

function cartProduct(setA, setB) {
  const product = [];
  for (let setAEL of setA) {
    if (!Array.isArray(setAEL)) {
      setAEL = [setAEL];
    }

    for (const setBEL of setB) {
      product.push([...setAEL, setBEL]);
    }
  }
  return product;
}

const colors = ['blue', 'red'];
const sizes = ['m', 'l'];
const styles = ['round neck', 'v neck'];
const brands = ['nike', 'adidas'];
console.log(cartesian(colors, sizes, styles, brands));
// Generalized Big O based on the worst-case
// Time complexity: O(n^x) - n - is the worst-case set length, x - is the amount of inputs
// Space complexity: O(n^x)
