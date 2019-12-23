var pathSum = function(root, target) {
  if (root === null) return 0;
  let count = 0;
  const depthSearch = (node, sum) => {
    if (target === sum + node.val) {
      count += 1;
    }
    if (node.left) depthSearch(node.left, sum + node.val);
    if (node.right) depthSearch(node.right, sum + node.val);
  };
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
    depthSearch(node, 0);
  }

  return count;
};
