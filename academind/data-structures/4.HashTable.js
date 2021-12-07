class HashTable {
  constructor() {
    this.size = 32;
    this.buckets = Array(32).fill(null);
  }

  hash(key) {
    let hash = 0;
    for (const char of key) {
      hash += char.charCodeAt(0);
    }

    return hash % this.size;
  }

  set(key, value) {
    const keyHash = this.hash(key);
    this.buckets[keyHash] = value;
  }

  get(key) {
    const keyHash = this.hash(key);
    return this.buckets[keyHash];
  }

  showInfo() {
    for (const key in this.buckets) {
      if (this.buckets[key] !== null) {
        console.log(key, this.buckets[key]);
      }
    }
  }
}

// --------------------
const word = 'hello';
const findFirstRep = (str) => {
  const table = new HashTable();
  for (const char of str) {
    if (table.get(char)) {
      return char;
    }
    table.set(char, 1);
  }
};

console.log(findFirstRep(word));

const table1 = new HashTable();

for (const char of 'academind') {
  table1.set(char, char);
}

for (const char of 'hello') {
  table1.set(char, char);
}

for (const char of 'does this work') {
  table1.set(char, char);
}

table1.showInfo();
