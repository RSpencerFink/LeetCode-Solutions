var uniqueMorseRepresentations = function(words) {
  const morse = words.map(el => {
    let string = '';
    el.split('').forEach(el => {
      string += morseCode[el];
    });
    return string;
  });

  const set = new Set(morse);
  return set.size;
};

const morseCode = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  x: '-..-',
  y: '-.--',
  z: '--..'
};
