var judgeCircle = function(moves) {
  const origin = [0, 0];
  moves.split('').forEach(el => {
    switch (el) {
      case 'U':
        origin[1] += 1;
        break;
      case 'D':
        origin[1] -= 1;
        break;
      case 'R':
        origin[0] += 1;
        break;
      case 'L':
        origin[0] -= 1;
        break;
      default:
        break;
    }
    console.log(origin);
  });
  return origin[0] === 0 && origin[1] === 0;
};
