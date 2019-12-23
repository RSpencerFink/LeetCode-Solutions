var maxDepth = function(root) {
  if (root === null) return 0;

  let max = 0;

  const depthSearch = (node, depth) => {
    if (!node.children.length) {
      if (depth > max) {
        max = depth;
      }
    }
    node.children.forEach(el => {
      depthSearch(el, depth + 1);
    });
  };

  depthSearch(root, 1);

  return max;
};
