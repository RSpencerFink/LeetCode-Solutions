function isBalanced(s) {
  const key = {
    '}': '{',
    ')': '(',
    ']': '['
  };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const bracket = s.charAt(i);
    if (bracket === '(' || bracket === '{' || bracket === '[') {
      stack.unshift(bracket);
    } else {
      if (stack[0] === key[bracket]) {
        stack.shift();
      } else {
        return 'NO';
      }
    }
  }
  return stack.length ? 'NO' : 'YES';
}
