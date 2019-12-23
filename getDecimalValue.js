var getDecimalValue = function(head) {
  const digits = [];
  let current = head;
  while (current) {
    digits.push(current.val);
    current = current.next;
  }
  let multiplier = 1;
  let num = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i]) {
      num += multiplier;
    }
    multiplier *= 2;
  }
  return num;
};
