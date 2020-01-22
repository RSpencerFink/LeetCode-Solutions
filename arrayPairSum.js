var arrayPairSum = function(nums) {
  nums = nums.sort((a, b) => b - a);
  let sum = 0;
  for (let idx = 0; idx < nums.length; idx += 2) {
    sum += Math.min(nums[idx], nums[idx + 1]);
  }
  return sum;
};
