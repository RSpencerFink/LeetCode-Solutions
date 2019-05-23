var hammingDistance = function(x, y) {
  const xBinary = convertToBinary(x);
  const yBinary = convertToBinary(y);
  let counter = 0;
  const evenArrs = evenArrayLength(xBinary, yBinary);
  for (let idx = 0; idx < evenArrs[0].length; idx++) {
    if (evenArrs[0][idx] !== evenArrs[1][idx]) {
      counter++;
    }
  }
  return counter;
};

const evenArrayLength = (x, y) => {
  while (x.length > y.length) {
    y.unshift(0);
  }
  while (y.length > x.length) {
    x.unshift(0);
  }
  return [x, y];
};

const generateBitMap = num => {
  const bitArray = [1];
  while (bitArray[bitArray.length - 1] < num) {
    bitArray.push(bitArray[bitArray.length - 1] * 2);
  }
  return bitArray.sort((x, y) => {
    return y - x;
  });
};

const convertToBinary = num => {
  const array = generateBitMap(num);
  const binary = [];
  for (let idx = 0; idx < array.length; idx++) {
    if (num >= array[idx] && num > 0) {
      binary.push(1);
      num -= array[idx];
    } else {
      binary.push(0);
    }
  }
  return binary;
};
