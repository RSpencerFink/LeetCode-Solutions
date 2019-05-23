var rangeSumBST = function(root, L, R) {
  const queue = [root];
  let sum = 0;
  while (queue.length > 0) {
    let currentNode = queue.shift();
    if (currentNode.val >= L && currentNode.val <= R) {
      sum += currentNode.val;
    }
    if (currentNode.left !== null) {
      queue.push(currentNode.left);
    }
    if (currentNode.right !== null) {
      queue.push(currentNode.right);
    }
  }
  return sum;
};
