var shortestToChar = function(S, C) {
  const stringArray = S.split('');
  return stringArray.map((el, idx) => {
    const left = checkLeft(idx, stringArray, C);
    const right = checkRight(idx, stringArray, C);
    if (!left) {
      return right;
    }
    if (!right) {
      return left;
    }
    return Math.min(left, right);
  });
};

const checkLeft = (idx, array, target) => {
  const start = idx;
  for (idx; idx >= 0; idx -= 1) {
    if (array[idx] === target) {
      return start - idx;
    }
  }
  return false;
};

const checkRight = (idx, array, target) => {
  const start = idx;
  for (idx; idx < array.length; idx++) {
    if (array[idx] === target) {
      return idx - start;
    }
  }
  return false;
};
