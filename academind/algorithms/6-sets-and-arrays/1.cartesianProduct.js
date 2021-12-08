// O(n^2) - is the case if we operate on the same array with 2 loops
// in this case, it's not O(n^2)
// It is time complexity O(n * m) - n - length of the 1st set, m of the 2nd set
// If they are of the same length, then it is O(n^2)
// And space complexity is also: O(n * m)
function cartProduct(setA, setB) {
  const product = [];
  for (const setAEL of setA) {
    for (const setBEL of setB) {
      product.push([setAEL, setBEL]);
    }
  }
  return product;
}

const colors = ['blue', 'red'];
const sizes = ['m', 'l'];
console.log(cartProduct(colors, sizes)); // [[blue, m], [blue, l], [red, m], [red, l]]
