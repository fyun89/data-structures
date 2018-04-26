class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.defaultSize = 0;
    this.howOld = 0;
    this.oldestArr = [];
  }

  enqueue(value) {
    var val = this.defaultSize;
    var age = this.howOld;
    this[val] = value;
    this.oldestArr.push(age);
    this.defaultSize++;
    this.howOld++;
  }

  dequeue() {
    this.defaultSize--;
    var firstItemProp = Math.min(...this.oldestArr);
    var firstItem = this[firstItemProp];
    delete this[firstItemProp];
    this.oldestArr.shift();
    return firstItem;
  }

  size() {
    if (this.defaultSize < 0) {
      this.defaultSize = 0;
    }
    return this.defaultSize;
  }
}
