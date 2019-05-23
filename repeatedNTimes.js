var repeatedNTimes = function(A) {
  let counter = {};
  for (let idx = 0; idx < A.length; idx++) {
    if (counter[A[idx]]) {
      counter[A[idx]] += 1;
    } else {
      counter[A[idx]] = 1;
    }
  }
  let arr = Object.keys(counter);
  for (let idx = 0; idx < arr.length; idx++) {
    if (counter[arr[idx]] > 1) {
      return arr[idx];
    }
  }
};
