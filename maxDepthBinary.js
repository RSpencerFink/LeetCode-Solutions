var maxDepth = function(root) {
  if (root === null) return 0;

  let max = 0;

  const depthSearch = (node, depth) => {
    if (!node.left && !node.right) {
      if (depth > max) {
        max = depth;
      }
    }
    if (node.left) depthSearch(node.left, depth + 1);
    if (node.right) depthSearch(node.right, depth + 1);
  };

  depthSearch(root, 1);

  return max;
};
