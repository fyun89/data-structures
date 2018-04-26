var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = {};
  newInstance.defaultSize = 0;
  newInstance.howOld = 0;
  newInstance.oldestValueArray = [];
  _.extend(newInstance, queueMethods);
  return newInstance;
};

var queueMethods = {};



queueMethods.enqueue = function(value) {
  queueMethods[this.howOld] = value;
  this.oldestValueArray.push(this.howOld);
  this.defaultSize++;
  this.howOld++;
};

queueMethods.dequeue = function() {
  this.defaultSize--;
  var firstItem = queueMethods[this.oldestValueArray[0]];
  delete queueMethods[this.oldestValueArray[0]];
  queueMethods[this.oldestValueArray.shift()];
  return firstItem;
};

queueMethods.size = function() {
  if (this.defaultSize < 0) {
    this.defaultSize = 0;
  }
  return this.defaultSize;
};