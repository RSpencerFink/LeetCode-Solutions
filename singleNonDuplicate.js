var singleNonDuplicate = function(nums) {
  for (let idx = 0; idx < nums.length; idx++) {
    if (nums[idx - 1] !== nums[idx] && nums[idx + 1] !== nums[idx]) {
      return nums[idx];
    }
  }
};
