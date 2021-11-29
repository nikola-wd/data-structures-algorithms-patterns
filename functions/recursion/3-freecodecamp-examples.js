// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-countdown
// https://www.youtube.com/watch?v=vLhHyGTkjCs&ab_channel=Codexpanse
// https://pythontutor.com/javascript.html#mode=edit Visualizer
// https://www.youtube.com/watch?v=LteNqj4DFD8&ab_channel=DevSage
// https://www.youtube.com/watch?v=lMBVwYrmFZQ&ab_channel=ColtSteele
// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-use-recursion-to-create-a-countdown/305925
// EXPLANATION ^

// In CS, recursion is a method of solving a problem
// where the solution depends on solutions to smaller
// instances of the same problem.

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    // Where do we even declare the array to which we push items?
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));
// At first, this seems counterintuitive since the value of n decreases, but the values in the final array are increasing. This happens because the push happens last, after the recursive call has returned. At the point where n is pushed into the array, countup(n - 1) has already been evaluated and returned [1, 2, ..., n - 1].

/* 
function recurseForever(a) {
  return recurseForever(a + 1);
}


Outer function recurseForever will return NOT the inner function, BUT the result of it! There is no special logic or mode in the language that allows recursion, no! It’s simply an order in which things get evaluated by parser.
 */

// Don't run this
/* function recurseReallyForever(a) {
  while ("We can") {
    a += 1;
  }

  return a;
}

The only exception here is that our call stack in the case of recurseReallyForever(a) will not be exceeded - it only will have one outer function, because there are no function calls inside. Instead there is a while loop inside that now will truly run forever and crush our browser.

And this is a point of midway takeaways! */

/* Now finally, with all the knowledge we’ve just read, let’s fix our bug! In order to do that, in some point of the iterations of our initial recurseForever function we need a condition in which we no longer make a function call - an exit contract. We call such a condition “Base case”. Every recursive function has to have one, otherwise it will cause a problem and as general convention we normally put base case as a first thing in the recursive function:
 */

function recurseForever(a) {
  // base case
  if (a >= 10) return a;

  console.log(a);

  return recurseForever(a + 1);
}
recurseForever(0); // logs 0 ... 10

const result = recurseForever(0); // logs 0 ... 9
console.log('result ', result); // And that's where 10 did go!

// Countdown solutions __________________
/* function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1); // How and when does this become an array?
    arr.unshift(n);
    return arr;
  }
} */

/* function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.splice(0, 0, n);
    return arr;
  }
} */

function countdown(n) {
  // base case
  if (n < 1) return [];
  if (n === 1) return [1];
  // in some point we need to iterate towards base case
  const output = [n]; // [5]
  console.log(output);
  // return output.concat(countdown(n - 1)); // [5, 4]
  return [...output, ...countdown(n - 1)]; // [5,4,...]
}

/*
function countdown(n) {
  if (n < 1) return [];
  return [n].concat(countdown(n - 1));
}
 */
// or using ternary operator
// const countdown = (n) => (n < 1 ? [] : [n].concat(countdown(n - 1)));
// const countdown = (n) => (n < 1 ? [] : [n, ...countdown(n - 1)]);

const res = countdown(5);
console.log(res);
// Only change code above this line

// Factorial -----------------------`
// STEP 1: What’s factorial? It’s 1 * 2 * 3 * … * n.
// STEP 2: Base case and iteration? Looking at the above, if we have n then we go to 1: (n - 1) until n === 1
// STEP 3: Write it:

/* function factorial(n) {
  // considering the fact that 1 * n = n
  if (n === 1) return n;

  return factorial(n - 1);
} */

// STEP 4: Produce the next result after base case: factorial(2) -> 2. How to return 2 if we have 1?
// STEP 5: Back to code:

function factorial(n) {
  if (n === 1) return n;
  return n * factorial(n - 1); // 2 * 1 - just what we need
}

// STEP 6: Test other numbers
console.log(factorial(4)); // 24 Correct!
console.log(factorial(5)); // 120 Correct!

// Tree traversal ------------------------------`
console.log('Tree traversal ------------------');
function getElementById(node, id) {
  /* base case # 1 */
  if (node.id === id) return node;

  /* if not, iterate over each child node repeating the process */
  for (const child of node.children) {
    /* repeat the same function for child and its children */
    const match = getElementById(child, id);
    /* if match gave us result - return it immediately */
    if (match) return match;
    /* if not, continue loop */
    /* we cannot return null without checking all children first */
  }
  /* if loop finishes and we haven't matched node at this point then it's base case #2 */
  return null;
}

/* Part 8. Conclusion
Ok, here are key takeaways:

Understanding recursion requires understanding of many programming principles and that’s why it might be overwhelming sometimes. Just look at the length of this guide.

Recursion often compared against iteration, but in a nutshell it’s also an iteration (otherwise they would simply be incomparable)

Each iteration of recursive function requires new arguments and the change between previous and the next argument has to point towards the base case

Recursion has very solid structure that is divided in two parts: inflation - all the code before internal function call and deflation - all the code that will run “on the way back”. Understanding and seeing this abstract structures gives you more understanding when you read or compose recursive function. */

/* In a way it’s almost like it’s going backwards. countdown() keeps getting called each time, so it “queries” all of them up until finally it reaches the end value that actually returns something (in this case [ ] a blank array).

Once it gets that blank array, it returns it and works it’s way up. So it starts by returning [ ], then returning [1], then [2, 1] etc… */
