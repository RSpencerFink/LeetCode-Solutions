var bstToGst = function(root) {
  const queue = [root];
  const values = getChildren(root);
  while (queue.length > 0) {
    let currentNode = queue.shift();
    let newVal = values.filter(el => el >= currentNode.val);
    currentNode.val = newVal.reduce((acc, el) => {
      return acc + el;
    });

    if (currentNode.left !== null) {
      queue.push(currentNode.left);
    }
    if (currentNode.right !== null) {
      queue.push(currentNode.right);
    }
  }
  return root;
};

const getChildren = node => {
  const queue = [node];
  const values = [];
  while (queue.length > 0) {
    let currentNode = queue.shift();
    values.push(currentNode.val);
    if (currentNode.left !== null) {
      queue.push(currentNode.left);
    }
    if (currentNode.right !== null) {
      queue.push(currentNode.right);
    }
  }
  return values;
};
