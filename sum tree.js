class node {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

let node5 = new node(4, null, null);
let node4 = new node(1, null, node5);
let node2 = new node(2, null, node4);
let node3 = new node(5, null, null);
let node1 = new node(2, node2, node3);



let sumPathsOfNode = function(targetSum, node, currentSum) {
  let count = 0;
  if (currentSum + node.val === targetSum) {
    count += 1;
  }
  if (node.left) {
    count += sumPathsOfNode(targetSum, node.left, currentSum + node.val);
  }
  if (node.right) {
    count += sumPathsOfNode(targetSum, node.right, currentSum + node.val);
  }
  return count;  
}

let countSumPaths = function(sum, node) {
  // follow the tree on all paths summing as we go
  let pathCount = sumPathsOfNode(sum, node, 0);
  
  // add in countSumPaths left, then the right
  if (node.left) {
    pathCount += countSumPaths(sum, node.left);
  }
  if (node.right) {
    pathCount += countSumPaths(sum, node.right);
  }
  return pathCount;
}

console.log(countSumPaths(7, node1));

