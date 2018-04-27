var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

  var node = new Node(value);
  if (this.head === null) {
    this.head = node.value; ///
  }
  this.tail = node;
  };

  list.removeHead = function() {

  var nodeToDelete = this.head;
  this.head = this.head.next;
  delete this.nodeToDelete;
  return nodeToDelete;
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
