class ListNode {
  constructor(name = 0, next = null, prev = null) {
    this.name = name;
    this.next = next;
    this.prev = prev;
  }
}

// brute force represent circle as doubly linked list
function passTheParcel(players, timer) {
  const head = new ListNode(players[0]);
  let size = 1;
  let prev = head;
  let curr;
  for (let i = 1; i < players.length; i++) {
    const player = players[i];
    curr = new ListNode(player);
    prev.next = curr;
    curr.prev = prev;
    size ++;
    prev = curr;
  }
  curr.next = head;
  head.prev = curr;

  let holder = head;
  while (size > 1) {
    let count = timer;
    while (count > 0) {
      holder = holder.next;
      count --;
    }
    // delete current holder
    holder.prev.next = holder.next;
    holder.next.prev = holder.prev;
    size --;
    holder = holder.next;
  }
  return holder.name;
}

// represent circle as singly linked list
function passTheParcelV2(players, timer) {
  const dummy = new ListNode();
  let curr = dummy;
  let size = 0;
  for (let player of players) {
    curr.next = new ListNode(player);
    size ++;
    curr = curr.next;
  }
  let head = dummy.next;
  let tail = curr;
  while (size > 1) {
    for (let i = 0; i < timer; i++) {
      const nextHolder = head.next;
      head.next = null;
      tail.next = head;
      tail = head;
      head = nextHolder;
    }
    head = head.next;
    size --;
  }
  return head.name;
}

// represent cirle as array (formation's solution)
function passTheParcel(players, timer) {
  let circle = players.slice();
  while (circle.length > 1) {
    // Pass the parcel to the next player
    for (let i = 0; i < timer; i++) {
      circle.push(circle.shift());
    }
    // Remove the player holding the parcel
    circle.shift();
  }
  return circle[0];
}