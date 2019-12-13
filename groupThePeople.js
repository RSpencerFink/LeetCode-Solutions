var groupThePeople = function(groupSizes) {
  const groups = {};
  const result = [];
  for (let idx = 0; idx < groupSizes.length; idx++) {
    if (groups[groupSizes[idx]]) {
      groups[groupSizes[idx]].push(idx);
    } else {
      groups[groupSizes[idx]] = [idx];
    }
    if (groups[groupSizes[idx]].length === groupSizes[idx]) {
      result.push(groups[groupSizes[idx]]);
      groups[groupSizes[idx]] = [];
    }
  }
  return result;
};
