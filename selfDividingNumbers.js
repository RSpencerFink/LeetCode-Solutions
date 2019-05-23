const selfDividingNumbers = function(left, right) {
  const result = [];
  for (let idx = left; idx <= right; idx++) {
    const numArray = separateIntegers(idx);
    if (checkArray(numArray, idx)) {
      result.push(idx);
    }
  }
  return result;
};

const separateIntegers = num => {
  const result = [];
  while (num > 0) {
    result.push(parseInt(num % 10));
    num = parseInt(num / 10);
  }
  return result;
};

const checkArray = (arr, target) => {
  for (let idx = 0; idx < arr.length; idx++) {
    if (target % arr[idx] !== 0) {
      return false;
    }
  }
  return true;
};
