/* Arrow functions
An arrow function expression (previously, and now incorrectly known as fat arrow function) has a shorter syntax compared to function expressions and does not have its own this, arguments, super, or new.target. Arrow functions are always anonymous. See also this hacks.mozilla.org blog post: "ES6 In Depth: Arrow functions".

Two factors influenced the introduction of arrow functions: shorter functions and non-binding of this.

Shorter functions
In some functional patterns, shorter functions are welcome. Compare: */

var a = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

var a2 = a.map(function (s) {
  return s.length;
});

console.log(a2); // logs [8, 6, 7, 9]

var a3 = a.map((s) => s.length);

console.log(a3); // logs [8, 6, 7, 9]

/* No separate this
Until arrow functions, every new function defined its own this value (a new object in the case of a constructor, undefined in strict mode function calls, the base object if the function is called as an "object method", etc.). This proved to be less than ideal with an object-oriented style of programming. */
function Person() {
  // The Person() constructor defines `this` as itself.
  this.age = 0;

  setInterval(function growUp() {
    // In nonstrict mode, the growUp() function defines `this`
    // as the global object, which is different from the `this`
    // defined by the Person() constructor.
    this.age++;
  }, 1000);
}

var p = new Person();

// In ECMAScript 3/5, this issue was fixed by assigning the value in this to a variable that could be closed over.
function Person() {
  var self = this; // Some choose `that` instead of `self`.
  // Choose one and be consistent.
  self.age = 0;

  setInterval(function growUp() {
    // The callback refers to the `self` variable of which
    // the value is the expected object.
    self.age++;
  }, 1000);
}

/* Alternatively, a bound function could be created so that the proper this value would be passed to the growUp() function.

An arrow function does not have its own this; the this value of the enclosing execution context is used. Thus, in the following code, the this within the function that is passed to setInterval has the same value as this in the enclosing function: */
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| properly refers to the person object
  }, 1000);
}

var p = new Person();
