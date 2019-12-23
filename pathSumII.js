var pathSum = function(root, target) {
  if (root === null) return [];
  let result = [];
  const dfs = (node, path) => {
    let newPath = path.concat([node.val]);
    if (!node.left && !node.right) {
      let pathSum = newPath.reduce((acc, el) => acc + el);
      if (pathSum === target) result.push(newPath);
    }
    if (node.left) dfs(node.left, newPath);
    if (node.right) dfs(node.right, newPath);
  };
  dfs(root, []);
  return result;
};
