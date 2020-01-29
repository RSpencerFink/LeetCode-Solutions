var merge = function(intervals) {
  intervals = intervals.sort((a, b) =>
    a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]
  );
  let merged = false;
  while (!merged) {
    merged = true;
    for (let idx = 0; idx < intervals.length - 1; idx++) {
      const [min, max] = intervals[idx];
      const [nextMin, nextMax] = intervals[idx + 1];
      if (nextMin >= min && nextMax <= max) {
        intervals.splice(idx + 1, 1);
        merged = false;
      } else if (nextMin <= max) {
        intervals[idx] = [min, nextMax];
        intervals.splice(idx + 1, 1);
        merged = false;
      }
    }
  }
  return intervals;
};
