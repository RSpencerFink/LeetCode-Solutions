var dailyTemperatures = function(T) {
  const result = [];
  for (let idx = 0; idx < T.length; idx++) {
    result.push(nextWarmerTemp(T, idx));
  }
  return result;
};

const nextWarmerTemp = (arr, pos) => {
  for (let idx = pos + 1; idx < arr.length; idx++) {
    if (arr[idx] > arr[pos]) {
      return idx - pos;
    }
  }
  return 0;
};
