class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.defaultSize = 0;
    this.numberOfPops = 0;
    this.howOld = 0;
  }

  enqueue(value) {
    var valueNum = this.howOld;
    this.storage[valueNum] = value;
    this.defaultSize++;
    this.howOld++;
  }

  dequeue() {
    this.defaultSize--;
    var firstItemProp = this.numberOfPops;
    var firstItem = this.storage[firstItemProp];
    delete this.storage[firstItemProp];
    this.numberOfPops++;
    return firstItem;
  }

  size() {
    if (this.defaultSize < 0) {
      this.defaultSize = 0;
    }
    return this.defaultSize;
  }
}