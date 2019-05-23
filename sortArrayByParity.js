var sortArrayByParity = function(A) {
  let odds = [];
  let evens = [];
  for (let idx = 0; idx < A.length; idx++) {
    if (A[idx] % 2 === 0) {
      evens.push(A[idx]);
    } else {
      odds.push(A[idx]);
    }
  }
  return evens.concat(odds);
};
