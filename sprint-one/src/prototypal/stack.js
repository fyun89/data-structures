var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.defaultSize = 0;

  return someInstance;
};

var stackMethods = {};

var stackMethods = {};

stackMethods.push = function(value) {
  stackMethods[this.defaultSize] = value;
  this.defaultSize++;
};

stackMethods.pop = function() {
  this.defaultSize--;
  var lastElement = stackMethods[this.defaultSize];
  delete stackMethods[this.defaultSize];
  return lastElement;
};

stackMethods.size = function() {
  if (this.defaultSize < 0) {
    return 0;
  }
  return this.defaultSize;
};