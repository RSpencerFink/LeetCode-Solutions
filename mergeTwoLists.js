var mergeTwoLists = function(l1, l2) {
  if (!l1 || !l2) {
    return l1 || l2;
  }
  let head;
  let current;
  if (l1.val < l2.val) {
    head = l1;
    current = l1;
    l1 = l1.next;
  } else {
    head = l2;
    current = l2;
    l2 = l2.next;
  }
  while (current) {
    if (l2 === null || (l1 && l1.val < l2.val)) {
      current.next = l1;
      l1 = l1 ? l1.next : null;
    } else {
      current.next = l2;
      l2 = l2 ? l2.next : null;
    }
    current = current.next;
  }
  return head;
};
