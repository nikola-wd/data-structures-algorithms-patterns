// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#recursion
function foo(i) {
  if (i < 0) return;
  console.log('begin: ' + i);
  foo(i - 1);
  console.log('end: ' + i);
}
foo(3);

// Output:

// begin: 3
// begin: 2
// begin: 1
// begin: 0
// end: 0
// end: 1
// end: 2
// end: 3

// DOM traversal
function walkTree(node) {
  if (node == null)
    //
    return;
  // do something with node
  for (var i = 0; i < node.childNodes.length; i++) {
    walkTree(node.childNodes[i]);
  }
}
// LOOP
function loop(x) {
  if (x >= 10)
    // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
    return;
  // do stuff
  loop(x + 1); // the recursive call
}
loop(0);


function debounce(cb, newVal, interval) {
  let timeout;
  return function () {
    const later = function () {
      timeout = null;
      cb(newVal)
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, interval);
  };
}


onChange={(e) => debounce(() => funkcija(argument), 400)}