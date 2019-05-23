var sortArray = function(nums) {
  //bubble sort
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let idx = 0; idx <= nums.length - 1; idx++) {
      const x = nums[idx];
      const y = nums[idx + 1];
      if (x > y) {
        nums[idx] = y;
        nums[idx + 1] = x;
        sorted = false;
      }
    }
  }
  return nums;
};
