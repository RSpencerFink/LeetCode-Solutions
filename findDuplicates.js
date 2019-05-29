var findDuplicates = function(nums) {
  const set = new Set();
  const duplicates = [];
  for (let idx = 0; idx < nums.length; idx++) {
    if (set.has(nums[idx])) {
      duplicates.push(nums[idx]);
    } else {
      set.add(nums[idx]);
    }
  }
  return duplicates;
};
