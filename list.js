

let node1 = {
    val: 3,
    pointerNext: null,
    pointerPrevious: null
  }
  
  let node2 = {
    val: 4,
    pointerNext: null,
    pointerPrevious: node1
  }
  
  let node3 = {
    val: 5,
    pointerNext: null,
    pointerPrevious: node2
  }
  
  let node4 = {
    val: 7,
    pointerNext: null,
    pointerPrevious: node3
  }
  
  node1.pointerNext = node2;
  node2.pointerNext = node3;
  node3.pointerNext = node4;
  
  
  let checkLeft = function(node) {
    console.log('checking left', node.val);
    let visitedHash = new Set();
    if (node.pointerPrevious === null) {
      return false;
    }
    do {
      if (visitedHash.has(node)) {
        return true;
      }
      visitedHash.add(node);
      if (node.pointerPrevious === null) {
        return false;
      }
      console.log('going previous', node.pointerPrevious.val);
      node = node.pointerPrevious;
    }  while (true)
  };
  
  let checkRight = function(node) {
    console.log('checking right', node.val);
    let visitedHash = new Set();
    if (node.pointerNext === null) {
      return false;
    }
    do {
      if (visitedHash.has(node)) {
        return true;
      }
      console.log('pushing',node.val)
      visitedHash.add(node);
      if (node.pointerNext === null) {
        console.log('found null right');
        return false;
      }
      console.log('going next', node.pointerNext.val);
      node = node.pointerNext;
    }  while (true)
  };
  
  
  
  console.log('right',checkRight(node2));
  console.log('left',checkLeft(node2));
  