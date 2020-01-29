var toGoatLatin = function(S) {
  const arr = S.split(' ');
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  for (let idx = 0; idx < arr.length; idx++) {
    let word = arr[idx];
    if (vowels.has(word[0].toLowerCase())) {
      arr[idx] += 'ma';
    } else {
      const first = arr[idx][0];
      arr[idx] = arr[idx].slice(1);
      arr[idx] += `${first}ma`;
    }
    let a = 0;
    while (a < idx + 1) {
      arr[idx] += 'a';
      a++;
    }
  }
  return arr.join(' ');
};
