// Instantiate a new graph
var Graph = function() {
  this.vertices = [];
  this.edges = [];
  
  
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.vertices.push(node);
  this.edges[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var target = node;
  var result = false;
  _.each(this.vertices, function(tuple) {
    if (tuple === target) {
      result = true;
    }
  });
  return result; 
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var targetIndex = null;
  this.vertices.find(function(elem, i) {
    console.log('target index ' + i);
    targetIndex = i;
  });
  console.log('before delete ' + this.vertices);
  this.vertices.splice(targetIndex, 1);
  console.log('after delete ' + this.vertices);
// debugger;
//   var toSlice;
//   var validation = false
//   _.each(this.vertices, function(elem, i) {
//     if (_.indexOf(elem, node) !== -1 ) {
//       toSlice = i;
//       validation = true
//     }
//   });
//   var final;
//   if (toSlice > 0){
//     var formal = this.vertices.slice(0, toSlice);
//     var latter = this.vertices.slice(toSlice + 1);
//     var combined = formal.concat(latter);
//   }else{
    
//   }
  
//   this.vertices = combined;
//   return validation
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

//var makeGraph = new Graph ()

/*
 * Complexity: What is the time complexity of the above functions?
 */


