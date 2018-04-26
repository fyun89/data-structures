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

    var firstItem = storage[Object.keys(storage)[0]];
    delete storage[Object.keys(storage)[0]];
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
