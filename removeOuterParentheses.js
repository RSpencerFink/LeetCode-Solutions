var removeOuterParentheses = function(S) {
  const arr = S.split('');
  const newArr = [];

  let leftCounter = 0;
  let rightCounter = 0;
  let tempArray = [];
  for (let idx = 0; idx < arr.length; idx++) {
    if (arr[idx] === '(') {
      leftCounter++;
    }
    if (arr[idx] === ')') {
      rightCounter++;
    }

    tempArray.push(arr[idx]);

    if (leftCounter === rightCounter && leftCounter > 0) {
      tempArray.shift();
      tempArray.pop();
      newArr.push(tempArray.join(''));
      tempArray = [];
    }
  }
  return newArr.join('');
};
