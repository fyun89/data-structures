class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.defaultValue = 0;
  }

  push(value) {
    var val = this.defaultValue;
    this[val] = value;
    this.defaultValue++;
  }

  pop() {
    this.defaultValue--;
    var val = this.defaultValue;
    var lastElement = this[val];
    delete this[val];
    return lastElement;
  }

  size() {
    if (this.defaultValue < 0) {
      this.defaultValue = 0;
    }
    return this.defaultValue;
  }
}

var NEWCLASS = new Stack();