var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var size = 0;
  someInstance.push = function(value) {
    size++
    storage.size = value;
  };

  someInstance.pop = function() {
    size--
    var result = storage.size;
    delete storage.size;
    return result
  };

  someInstance.size = function() {
    if (size < 0) {
      size = 0;
    }
    return size;
  };

  return someInstance;
};
