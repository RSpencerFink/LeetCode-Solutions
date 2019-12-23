var hasPathSum = function(root, target) {
  if (root === null) return false;
  let found = false;
  const search = (node, sum) => {
    if (found) return;
    sum += node.val;
    if (!node.left && !node.right) {
      if (sum === target) {
        found = true;
      }
    }
    if (node.left) search(node.left, sum);
    if (node.right) search(node.right, sum);
  };
  search(root, 0);
  return found;
};
