var maxIncreaseKeepingSkyline = function(grid) {
  const skyline = getSkyline(grid);
  const maxGrid = generateMaxGrid(skyline);
  let diff = 0;
  for (let idx = 0; idx < grid.length; idx++) {
    for (let idx2 = 0; idx2 < grid[idx].length; idx2++) {
      diff += maxGrid[idx][idx2] - grid[idx][idx2];
    }
  }
  return diff;
};

const addRow = (grid, rowIdx) => {
  let highest = 0;
  for (let idx = 0; idx < grid[rowIdx].length; idx++) {
    if (grid[rowIdx][idx] > highest) {
      highest = grid[rowIdx][idx];
    }
  }
  return highest;
};

const addCol = (grid, colIdx) => {
  let highest = 0;
  for (let idx = 0; idx < grid.length; idx++) {
    if (grid[idx][colIdx] > highest) {
      highest = grid[idx][colIdx];
    }
  }
  return highest;
};

const getSkyline = grid => {
  const leftRight = [];
  const topBottom = [];
  for (let idx = 0; idx < grid.length; idx++) {
    topBottom.push(addCol(grid, idx));
  }
  for (let idx = 0; idx < grid[0].length; idx++) {
    leftRight.push(addRow(grid, idx));
  }
  return { leftRight, topBottom };
};

const generateMaxGrid = skyline => {
  let newGrid = [];
  for (let idx = 0; idx < skyline.leftRight.length; idx++) {
    let gridRow = [];
    let maxLeftRight = skyline.leftRight[idx];
    for (let idx2 = 0; idx2 < skyline.topBottom.length; idx2++) {
      let maxTopBottom = skyline.topBottom[idx2];
      if (maxLeftRight < maxTopBottom) {
        gridRow.push(maxLeftRight);
      } else {
        gridRow.push(maxTopBottom);
      }
    }
    newGrid.push(gridRow);
  }
  return newGrid;
};
