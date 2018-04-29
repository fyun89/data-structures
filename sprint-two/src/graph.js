// Instantiate a new graph
var Graph = function() {
  this.vertices = [];
  //this.edges = [];
  
  
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.vertices.push([node]);
  //this.edges.push([this.vertices.length-1, null]); //if hasEdge, chg null to that other end of edge?
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
  //var nodeIndex = 
  for (var i = 0; i < this.vertices.length; i++) {
    if (this.vertices[i][0] === node) {
      this.vertices.splice(i, 1);
      //targetExists = true
    }

  }
  for (var j = 0; j < this.vertices.length; j++){
    for (var k = 1; k < this.vertices.length; k++) {
      if (this.vertices[j][k] === node){
        this.vertices[j].splice(k, 1);
      }
    }
  }

  // if (targetExists === true){
    // for (var j = 0; j < this.vertices.length; j++){
    //   if (this.vertices[j].includes(node)) {
    //     for (var k = 0; k < this.vertices.length; k++) {
    //       if (this.vertices[j][k] === node){
    //         this.vertices[j].splice(k, 1)
    //       }
    //     }
    //   }
    // }
  // }
  //console.log('before delete ' + this.vertices);
  //this.vertices.splice(targetIndex, 1);
  //console.log('after delete ' + this.vertices);
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
  var finalCheck = false;
  for (var i = 0; i < this.vertices.length; i++) {
    var check = false;
    if (this.vertices[i][0] === fromNode && this.vertices[i].includes(toNode)) {
      check = true;
    }
    if (this.vertices[i][0] === toNode && this.vertices[i].includes(fromNode)) {
      check = true;
    }
    finalCheck = check;
  }
  return finalCheck;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.vertices.length; i++) {
    if (this.vertices[i][0] === fromNode && this.vertices[i].includes(toNode) === false) {
      this.vertices[i].push(toNode)
    }
    if (this.vertices[i][0] === toNode && this.vertices[i].includes(fromNode) === false) {
      this.vertices[i].push(fromNode)
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.vertices.length; i++) {
    if (this.vertices[i][0] === fromNode) {
      for (var j = 1; j < this.vertices[i].length; j++) {
        if (this.vertices[i][j] === toNode)
        this.vertices[i].splice(j, 1)
      }
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

//var makeGraph = new Graph ()

/*
 * Complexity: What is the time complexity of the above functions?
 */


