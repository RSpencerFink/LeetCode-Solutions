var printLinkedListInReverse = function(head) {
  const queue = [head];
  while (head.getNext()) {
    head = head.getNext();
    queue.unshift(head);
  }
  for (let idx = 0; idx < queue.length; idx++) {
    queue[idx].printValue();
  }
};
