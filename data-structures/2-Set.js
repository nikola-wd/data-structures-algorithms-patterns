function MySet() {
  // Will hold the set
  var collection = [];

  this.has = (element) => collection.indexOf(element) !== -1;

  // Returns all the values in the set
  this.values = () => collection;

  this.add = (element) => {
    if (this.has(element)) return false;

    collection.push(element);
    return true;
  };

  this.remove = (element) => {
    if (!this.has(element)) return false;

    var index = collection.indexOf(element);
    collection.splice(index, 1);
    return true;
  };

  this.size = () => collection.length;

  // Returns the unions of two sets as a new set
  this.union = (otherSet) => {
    var unionSet = new Set();
    var firstSet = this.values();
    var secondSet = otherSet.values();

    firstSet.forEach((item) => unionSet.add(item));
    secondSet.forEach((item) => unionSet.add(item));
  };

  // Returns the intersection of two sets as a new set
  this.intersection = (otherSet) => {
    var intersectionSet = new Set();
    var firstSet = this.values();

    firstSet.forEach((item) => {
      if (otherSet.has(item)) {
        intersectionSet.add(item);
      }
    });

    return intersectionSet;
  };

  // Returns the difference of two sets as a new set
  this.difference = (otherSet) => {
    var differenceSet = new Set();

    var [longerSet, shorterSet] =
      this.size > otherSet.size ? [this, otherSet] : [otherSet, this];

    longerSet.values().forEach((item) => {
      if (!shorterSet.has(item)) {
        differenceSet.add(item);
      }
    });

    shorterSet.values().forEach((item) => {
      if (!longerSet.has(item)) {
        differenceSet.add(item);
      }
    });

    return differenceSet;
  };

  // Tests if the set is a subset of a different set
  this.subset = (otherSet) => {
    var firstSet = this.values();

    const isInOtherSet = (item) => otherSet.has(item);
    return firstSet.every(isInOtherSet);
  };
}

var setA = new MySet();
var setB = new MySet();

setA.add('a');
setA.add('c');
setA.add('r');
setA.add('f');
setA.add('m');

setB.add('b');
setB.add('c');
setB.add('a');
setB.add('d');

console.log('a values: ', setA.values());
console.log('b values: ', setB.values());

console.log('Subset: ', setA.subset(setB));
console.log('Intersection: ', setA.intersection(setB).values());
console.log('Difference: ', setA.difference(setB).values());
