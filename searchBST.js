var searchBST = function(root, val) {
  //BFS
  const queue = [root];
  while (queue.length > 0) {
    const currentNode = queue.shift();
    if (val === currentNode.val) {
      return currentNode;
    }
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }
  return null;
};

var searchBST = function(root, val) {
  //DFS
  if (!root) {
    return null;
  }
  if (root.val === val) {
    return root;
  }
  if (val > root.val) {
    return searchBST(root.right, val);
  }
  if (val < root.val) {
    return searchBST(root.left, val);
  }
};
