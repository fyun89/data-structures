var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.defaultSize = 0;
  this.howOld = 0;
};

Queue.prototype.enqueue = function(value) {

  var val = this.defaultSize;
  this[val] = value;
  this.defaultSize++;
  this.howOld++;
};

Queue.prototype.dequeue = function() {
  this.defaultSize--;
  var firstItemProp = _.reduce(Object.keys(this), function(acc, el){
    if (acc > el) {
      acc = el;
    }
    return Number(acc);
  });
  var firstItem = this[firstItemProp];
  delete this[firstItemProp];
  return firstItem;
};

Queue.prototype.size = function() {
  if (this.defaultSize < 0) {
    this.defaultSize = 0;
  }
  return this.defaultSize;
};

var NEWCLASS = new Queue();