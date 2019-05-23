var flipAndInvertImage = function(A) {
  let result = [];
  for (let idx = 0; idx < A.length; idx++) {
    let tempArray = [];
    for (let idx2 = 0; idx2 < A[idx].length; idx2++) {
      if (A[idx][idx2] === 0) {
        tempArray.push(1);
      } else {
        tempArray.push(0);
      }
    }
    result.push(tempArray.reverse());
  }
  return result;
};
