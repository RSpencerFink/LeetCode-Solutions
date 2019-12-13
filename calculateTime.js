var calculateTime = function(keyboard, word) {
  const keyboardArr = keyboard.split('');
  const wordArr = word.split('');
  let time = 0;
  let fingerPos = 0;
  for (let idx = 0; idx < wordArr.length; idx++) {
    time += Math.abs(keyboardArr.indexOf(wordArr[idx]) - fingerPos);
    fingerPos = keyboardArr.indexOf(wordArr[idx]);
  }
  return time;
};

var calculateTime = function(keyboard, word) {
  const keyboardTimes = {};
  for (let idx = 0; idx < keyboard.length; idx++) {
    keyboardTimes[keyboard.charAt(idx)] = idx;
  }
  let time = 0;
  let fingerPos = 0;
  for (let idx = 0; idx < word.length; idx++) {
    time += Math.abs(keyboardTimes[word.charAt(idx)] - fingerPos);
    fingerPos = keyboardTimes[word.charAt(idx)];
  }
  return time;
};
