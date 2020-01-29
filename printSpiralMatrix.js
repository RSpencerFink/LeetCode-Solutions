const printSpiralMatrix = n => {
  const matrix = buildMatrix(n);
  let rowMin = 0;
  let rowMax = n - 1;
  let colMin = 0;
  let colMax = n - 1;
  let counter = 0;
  while (rowMin < rowMax && colMin < colMax) {
    for (let idx = colMin; idx < colMax; idx++) {
      console.log(rowMin, idx);
      matrix[rowMin][idx] = counter;
      counter++;
    }
    rowMin++;
    for (let idx = rowMin; idx < rowMax; idx++) {
      console.log(idx, colMax);
      matrix[idx][colMax] = counter;
      counter++;
    }
    colMax--;
    for (let idx = colMax; idx > colMin; idx--) {
      console.log(rowMax, idx);
      matrix[rowMax][idx] = counter;
      counter++;
    }
    rowMax--;
    for (let idx = rowMax; idx > rowMin; idx--) {
      console.log(idx, colMin);
      matrix[idx][colMin] = counter;
      counter++;
    }
    colMin++;
  }
  console.log(matrix);
};

const buildMatrix = n => {
  return new Array(n).fill(new Array(n).fill(0));
};

printSpiralMatrix(4);
