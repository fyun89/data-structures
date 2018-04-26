var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.defaultSize = 0;
};

Stack.prototype.push = function(value) {
  var val = this.defaultSize;
  this[val] = value;

  this.defaultSize++;
};

Stack.prototype.pop = function() {
  this.defaultSize--;
  var val = this.defaultSize;
  var lastElement = this[val];
  delete this[val];
  return lastElement;
};

Stack.prototype.size = function() {
  if (this.defaultSize < 0) {
    return 0;
  }
  return this.defaultSize;
};

var NEWCLASS = new Stack();