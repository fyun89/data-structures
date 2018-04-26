var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var size = 0;
  var howOld = 0;

  someInstance.enqueue = function(value) {
    storage[howOld] = value;
    size++;
    howOld++;
  };

  someInstance.dequeue = function() {
    size--;
    var oldestValue = function(array) {
      if (array.length === 0) {
        return 'please provide some value';
      }
      return _.reduce(array, function(acc, el) {
        if (acc > el) {
          acc = el;
        }
        return acc;
      });
    };
    var firstItem = storage[oldestValue(Object.keys(storage))];
    delete storage[oldestValue(Object.keys(storage))];
    return firstItem;
  };

  someInstance.size = function() {
    if (size < 0) {
      size = 0;
    }
    return size;
  };

  return someInstance;
};
