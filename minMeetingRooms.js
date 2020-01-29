var minMeetingRooms = function(intervals) {
  const starts = intervals
    .slice(0)
    .map(el => el[0])
    .sort((a, b) => a - b);
  const ends = intervals
    .slice(0)
    .map(el => el[1])
    .sort((a, b) => a - b);
  let rooms = 0;
  let end = 0;
  for (let idx = 0; idx < starts.length; idx++) {
    console.log(starts[idx], ends[end]);
    if (starts[idx] < ends[end]) {
      rooms += 1;
    } else {
      end += 1;
    }
  }
  return rooms;
};
