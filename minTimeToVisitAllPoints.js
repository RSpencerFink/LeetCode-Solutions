var minTimeToVisitAllPoints = function(points) {
  let time = 0;
  let pos = points.shift();
  while (points.length) {
    const target = points.shift();
    const deltaX = Math.abs(target[0] - pos[0]);
    const deltaY = Math.abs(target[1] - pos[1]);
    time += Math.max(deltaX, deltaY);
    pos = target;
  }
  return time;
};
