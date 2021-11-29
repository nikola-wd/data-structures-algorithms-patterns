/* 
You may nest a function within another function. The nested (inner) function is private to its containing (outer) function.

It also forms a closure. A closure is an expression (most commonly, a function) that can have free variables together with an environment that binds those variables (that "closes" the expression).

Since a nested function is a closure, this means that a nested function can "inherit" the arguments and variables of its containing function. In other words, the inner function contains the scope of the outer function.

To summarize:

The inner function can be accessed only from statements in the outer function.
The inner function forms a closure: the inner function can use the arguments and variables of the outer function, while the outer function cannot use the arguments and variables of the inner function.
The following example shows nested functions: 
*/

function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
a = addSquares(2, 3); // returns 13
b = addSquares(3, 4); // returns 25
c = addSquares(4, 5); // returns 41

console.log(a);
console.log(b);
console.log(c);

// Since the inner function forms a closure, you can call the outer function and specify arguments for both the outer and inner function:
function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
const fn_inside = outside(3);
// Think of it like: give me a function that adds 3 to whatever you give it

const result = fn_inside(5); // returns 8

const result1 = outside(3)(5); // returns 8

/* 
Preservation of variables
Notice how x is preserved when inside is returned. A closure must preserve the arguments and variables in all scopes it references. Since each call provides potentially different arguments, a new closure is created for each call to outside. The memory can be freed only when the returned inside is no longer accessible.
This is not different from storing references in other objects, but is often less obvious because one does not set the references directly and cannot inspect them. 
*/

// -------------------------------------
/* 
Multiply-nested functions
Functions can be multiply-nested. For example:

A function (A) contains a function (B), which itself contains a function (C).
Both functions B and C form closures here. So, B can access A, and C can access B.
In addition, since C can access B which can access A, C can also access A.
Thus, the closures can contain multiple scopes; they recursively contain the scope of the functions containing it. This is called scope chaining. (The reason it is called "chaining" is explained later.)

Consider the following example:
 */
function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); // logs 6 (1 + 2 + 3)

/*
In this example, C accesses B's y and A's x.
This can be done because:
B forms a closure including A (i.e., B can access A's arguments and variables).
C forms a closure including B.
Because B's closure includes A, C's closure includes A, C can access both B and A's arguments and variables. In other words, C chains the scopes of B and A, in that order.
The reverse, however, is not true. A cannot access C, because A cannot access any argument or variable of B, which C is a variable of. Thus, C remains private to only B.
*/

var pet = function (name) {
  // The outer function defines a variable called "name"
  var getName = function () {
    return name; // The inner function has access to the "name" variable of the outer
    //function
  };
  return getName; // Return the inner function, thereby exposing it to outer scopes
};
const myPet = pet('Vivie');

myPet(); // Returns "Vivie"

// Returned object example
var createPet = function (name) {
  var sex;

  return {
    setName: function (newName) {
      name = newName;
    },

    getName: function () {
      return name;
    },

    getSex: function () {
      return sex;
    },

    setSex: function (newSex) {
      if (
        typeof newSex === 'string' &&
        (newSex.toLowerCase() === 'male' || newSex.toLowerCase() === 'female')
      ) {
        sex = newSex;
      }
    },
  };
};

var pet = createPet('Vivie');
pet.getName(); // Vivie

pet.setName('Oliver');
pet.setSex('male');
pet.getSex(); // male
pet.getName(); // Oliver

// -----------------------------------
// The functions do not even have to be assigned to a variable, or have a name.
var getCode = (function () {
  var apiCode = '0]Eal(eh&2'; // A code we do not want outsiders to be able to modify...

  return function () {
    return apiCode;
  };
})();

getCode(); // Returns the apiCode

// --------------------------------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function
  }
  displayName();
}
init();

function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();

/* The reason is that functions in JavaScript form closures. A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created. In this case, myFunc is a reference to the instance of the function displayName that is created when makeFunc is run. The instance of displayName maintains a reference to its lexical environment, within which the variable name exists. For this reason, when myFunc is invoked, the variable name remains available for use, and "Mozilla" is passed to alert. */

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12

function makeSizer(size) {
  return function () {
    document.body.style.fontSize = size + 'px';
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

/* 
size12, size14, and size16 are now functions that resize the body text to 12, 14, and 16 pixels, respectively. You can attach them to buttons (in this case hyperlinks) as demonstrated in the following code example. */

document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;

// ------------------------------
// Emulating private methods with closuress
// Module design pattern
var counter = (function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function () {
      changeBy(1);
    },

    decrement: function () {
      changeBy(-1);
    },

    value: function () {
      return privateCounter;
    },
  };
})();

console.log(counter.value()); // 0.

counter.increment();
counter.increment();
console.log(counter.value()); // 2.

counter.decrement();
console.log(counter.value()); // 1.

// ------------------------------
var makeCounter = function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },

    decrement: function () {
      changeBy(-1);
    },

    value: function () {
      return privateCounter;
    },
  };
};

// Independent closures
var counter1 = makeCounter();
var counter2 = makeCounter();

alert(counter1.value()); // 0.

counter1.increment();
counter1.increment();
alert(counter1.value()); // 2.

counter1.decrement();
alert(counter1.value()); // 1.
alert(counter2.value()); // 0.

// ------------------------------
// Closure Scope Chain
/* A common mistake is not realizing that in the case where the outer function is itself a nested function, access to the outer function's scope includes the enclosing scope of the outer function—effectively creating a chain of function scopes. To demonstrate, consider the following example code. */
// global scope
var e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // log 20

// You can also write without anonymous functions:

// global scope
var e = 10;
function sum(a) {
  return function sum2(b) {
    return function sum3(c) {
      // outer functions scope
      return function sum4(d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

var sum2 = sum(1);
var sum3 = sum2(2);
var sum4 = sum3(3);
var result = sum4(4);
console.log(result); //log 20
