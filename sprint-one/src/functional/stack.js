var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var defaultSize = 0;
  someInstance.push = function(value) {
    storage[defaultSize] = value;
    defaultSize++;
  };

  someInstance.pop = function() {
    defaultSize--;
    var result = storage[defaultSize];
    delete storage[defaultSize];
    return result;
  };

  someInstance.size = function() {
    if (defaultSize < 0) {
      defaultSize = 0;
    }
    return defaultSize;
  };

  return someInstance;
};
