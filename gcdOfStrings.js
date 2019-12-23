var gcdOfStrings = function(str1, str2) {
  if (str1 === str2) return str1;
  const subs1 = generateSubs(str1);
  const keys1 = Object.keys(subs1);
  const subs2 = generateSubs(str2);
  const keys2 = Object.keys(subs2);
  const common = [];
  keys1.forEach(el => {
    if (keys2.includes(el)) common.push(el);
  });
  for (let i = 0; i < common.length; i++) {
    if (checkSub(str1, common[i]) && checkSub(str2, common[i])) {
      return common[i];
    }
  }
  return '';
};

const checkSub = (str, sub) => {
  let test = sub;
  while (test.length < str.length) {
    test += sub;
  }
  return test === str;
};

const generateSubs = str => {
  const strLength = str.length;
  const subs = {};
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length; j > 0; j--) {
      if (i + j <= arr.length) {
        let sub = str.substr(i, j);
        if (subs[sub]) {
          subs[sub]++;
        } else {
          subs[sub] = 1;
        }
      }
    }
  }
  const keys = Object.keys(subs);
  for (let i = 0; i < keys.length; i++) {
    if (strLength % keys[i].length !== 0) {
      delete subs[keys[i]];
    }
  }
  return subs;
};
