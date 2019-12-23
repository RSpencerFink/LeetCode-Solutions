var maxKilledEnemies = function(grid) {
  let maxKills = 0;
  for (let idx1 = 0; idx1 < grid.length; idx1++) {
    for (let idx2 = 0; idx2 < grid[idx1].length; idx2++) {
      if (grid[idx1][idx2] === '0') {
        let kills = checkSpace(grid, [idx1, idx2]);
        if (kills > maxKills) {
          maxKills = kills;
        }
      }
    }
  }
  return maxKills;
};

const checkSpace = (grid, pos) => {
  let kills = 0;
  //rows - up;
  for (let idx = pos[0]; idx >= 0; idx--) {
    if (grid[idx][pos[1]] === 'W') break;
    if (grid[idx][pos[1]] === 'E') kills += 1;
  }
  //rows - down;
  for (let idx = pos[0]; idx < grid.length; idx++) {
    if (grid[idx][pos[1]] === 'W') break;
    if (grid[idx][pos[1]] === 'E') kills += 1;
  }
  //columns - left;
  for (let idx = pos[1]; idx >= 0; idx--) {
    if (grid[pos[0]][idx] === 'W') break;
    if (grid[pos[0]][idx] === 'E') kills += 1;
  }
  //columns - right;
  for (let idx = pos[1]; idx < grid[pos[0]].length; idx++) {
    if (grid[pos[0]][idx] === 'W') break;
    if (grid[pos[0]][idx] === 'E') kills += 1;
  }
  return kills;
};
