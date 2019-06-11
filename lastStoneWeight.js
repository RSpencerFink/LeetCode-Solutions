var lastStoneWeight = function(stones) {
  let result = stones.sort((x, y) => {
    return y - x;
  });
  while (result.length > 1) {
    const stone1 = result.shift();
    const stone2 = result.shift();
    const collision = collideStones(stone1, stone2);
    if (collision) {
      result.push(collision);
    }
    result = result.sort((x, y) => {
      return y - x;
    });
  }
  return result;
};

const collideStones = (stone1, stone2) => {
  return Math.max(stone1, stone2) - Math.min(stone1, stone2);
};
