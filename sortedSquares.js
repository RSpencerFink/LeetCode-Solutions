var sortedSquares = function(A) {
  const squares = A.map(el => {
    return Math.pow(el, 2);
  });
  return squares.sort((x, y) => {
    return x - y;
  });
};
