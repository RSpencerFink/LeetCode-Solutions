var minDepth = function(root) {
  if (root === null) return 0;

  let min = Infinity;

  const depthSearch = (root, depth) => {
    if (!root.left && !root.right) {
      if (depth < min) {
        min = depth;
      }
    }
    if (root.left) depthSearch(root.left, depth + 1);
    if (root.right) depthSearch(root.right, depth + 1);
  };

  depthSearch(root, 1);

  return min;
};
