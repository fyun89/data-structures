var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = [];// fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //debugger;
  var n = new Tree(value);
  this.children.push(n);
};

treeMethods.contains = function(target) {
  var trigger = false;
  // while (trigger === false){
  //   if (finder.contains(target)){
  //     trigger = true
  //   }else{
  //     //some how add .children to the end of finder
  //     finder = this.children.children
  //   }
  // }

  _.each(this.children, function(el) {
    if (el.value === target) {
      trigger = true;
    } else {
      _.each(el.children, function(elem) {
        if (elem.value === target) {
          trigger = true;
        }
      });
    }
  });
  return trigger;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
