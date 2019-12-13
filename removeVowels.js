var removeVowels = function(S) {
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
  };
  let arr = S.split('');
  for (let idx = 0; idx < arr.length; idx++) {
    if (vowels[arr[idx].toLowerCase()]) {
      arr[idx] = '';
    }
  }
  return arr.join('');
};
