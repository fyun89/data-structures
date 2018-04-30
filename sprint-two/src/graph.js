// Instantiate a new graph
var Graph = function() {
  this.vertices = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.vertices.push([node]);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var target = node;
  var result = false;
  _.each(this.vertices, function(tuple) {
    if (tuple[0] === target) {
      result = true;
    }
  });
  return result; 
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var targetExists = false;
  for (var i = 0; i < this.vertices.length; i++) {
    if (this.vertices[i][0] === node) {
      this.vertices.splice(i, 1);
    }
  }
  for (var j = 0; j < this.vertices.length; j++) {
    for (var k = 0; k < this.vertices[j].length; k++) {
      if (this.vertices[j][k] === node) {
        this.vertices[j].splice(k, 1);
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.vertices.length; i++) {
    var checkToNode = false;
    var checkFromNode = false;
    if (this.vertices[i][0] === fromNode && this.vertices[i].includes(toNode)) {
      checkToNode = true;
    }
    if (checkToNode === true) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.vertices.length; i++) {
    if (this.vertices[i][0] === fromNode /*&& this.vertices[i].includes(toNode) === false*/) {
      this.vertices[i].push(toNode);
    }
    if (this.vertices[i][0] === toNode && fromNode !== toNode /*this.vertices[i].includes(fromNode) === false*/) {
      this.vertices[i].push(fromNode);
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var edgeToDelete;
  for (var i = 0; i < this.vertices.length; i++) {
    if (this.vertices[i][0] === fromNode) {
      for (var j = 1; j < this.vertices[i].length; j++) {
        if (this.vertices[i][j] === toNode) {
          edgeToDelete = this.vertices[i][0];
          this.vertices[i].splice(j, 1);
        }
      }
    }
  }
  for (var k = 0; k < this.vertices.length; k++) {
    for (var l = 1; l < this.vertices[k].length; l++) {
      if (this.vertices[k][l] === edgeToDelete) {
        this.vertices[k].splice(l, 1);
      }
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var arrayCopy = this.vertices.slice();
  for (var i = 0; i < arrayCopy.length; i++) {
    cb.call(this, arrayCopy[i][0]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


