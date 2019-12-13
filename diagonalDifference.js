function diagonalDifference(arr) {
  let sum1 = 0;
  let sum2 = 0;
  for (let idx = 0; idx < arr.length; idx++) {
    sum1 += arr[idx][idx];
    sum2 += arr[arr.length - idx - 1][idx];
  }
  return Math.abs(sum1 - sum2);
}
