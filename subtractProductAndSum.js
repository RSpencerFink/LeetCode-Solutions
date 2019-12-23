var subtractProductAndSum = function(n) {
  const digits = [];
  while (n > 0) {
    digits.push(n % 10);
    n = parseInt(n / 10);
  }
  let sum;
  let product;
  sum = product = digits.pop();
  for (let idx = 0; idx < digits.length; idx++) {
    product *= digits[idx];
    sum += digits[idx];
  }
  return product - sum;
};

var subtractProductAndSum = function(n) {
  let sum;
  let product;
  sum = product = n % 10;
  n = parseInt(n / 10);
  while (n > 0) {
    let num = n % 10;
    sum += num;
    product *= num;
    n = parseInt(n / 10);
  }
  return product - sum;
};
