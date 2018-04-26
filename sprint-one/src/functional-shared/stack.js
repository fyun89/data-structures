//Functional instantiation with shared methods: same as step 1, but with shared methods
// Do:
// Work within the src/functional-shared/ folder
// Create an object that holds the methods that will be shared by all instances of the class
// Use the keyword this in your methods
// Use _.extend to copy the methods onto the instance
// Don't:
// Use the keyword new or prototype chains


// var newGiraffe = {};
// newGiraffe.name = name;
// newGiraffe.height = height;
// newGiraffe.hunger = 10;
// extend(newGiraffe, giraffeMaker.giraffeMethods);

// return newGiraffe;

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = {};
  _.extend(newInstance, stackMethods);
  return newInstance;
};



var stackMethods = {};

// Implement the methods below
var size = 0;

someInstance.push = function(value) {
  stackMethods[size] = value;
  size++;
};

someInstance.pop = function() {
  size--;
  var lastElement = stackMethods[size];
  delete stackMethods[size];
  return lastElement;
};

someInstance.size = function() {
  if (size < 0) {
    return 0;
  }
  return size;
};

// var Stack = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
//   var newInstance = {};

//   _.extend(newInstance, stackMethods);
//    return newInstance;
//  };

//  var stackMethods = {
//  // stackMethods.push : function(value) {
//  //  this.size++;
//  //  this.[size] = value;
//  // };

//  // stackMethods.pop : function() {
//  //  this.size--;
//  //  var lastItem = this.lastItem[size];
//  //  delete this[size];
//  //  return lastItem
//  // };

//  stackMethods.size : function() {
//    return size > 0 ? Object.keys(this) : 0;
//  };
// };

//giraffeMaker.giraffeMethods.isTallEnough = function(treeHeight) {
//   return this.height > treeHeight;
