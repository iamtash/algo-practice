/*
Given a dictionary of friend lists:

    Given a person's name, return a list of all of the friends of their friends (2nd order friends)
    Given a person's name and a positive number, n, greater than 0, return the nth order friends. For n = 1, that is the person's direct friends. For n = 2, this gives the same result as the first problem.
    Given two people's names, return the distance between them in friend connections, their Kevin Bacon number?

All of these problems take as input a dictionary where the keys are someone's name and the value for each is a list of their friend's names:

{
  "Daniel": ["Mike", "Sophie", "James", "Tony"],
  "Mike": ["Daniel", "James", "Luke"],
  "Tony": ["Daniel", "Sophie"],
  "Sophie": ["Mike", "Daniel", "Tony", "Eun Ji"],
  "Eun Ji": ["Sophie"],
  "James": ["Daniel", "Mike"],
  "Luke": ["Mike"]
}
Tony
Daniel, Sophie
Mike, James, Eun Ji
Luke

James
Daniel, Mike
Sophie, Tony, Luke
*/

class Queue {
  constructor(list = []) {
    this.list = list;
    this.size = list.length;
  }

  queue(item) {
    this.list.push(item);
    this.size++;
  }

  dequeue() {
    if (this.size) {
      const next = this.list.shift();
      this.size--;
      return next;
    }
  }
}

const FRIENDS = {
  "Daniel": ["Mike", "Sophie", "James", "Tony"],
  "Mike": ["Daniel", "James", "Luke"],
  "Tony": ["Daniel", "Sophie"],
  "Sophie": ["Mike", "Daniel", "Tony", "Eun Ji"],
  "Eun Ji": ["Sophie"],
  "James": ["Daniel", "Mike"],
  "Luke": ["Mike"]
};

function secondFriends(friend) {
  const output = [];
  const friends = new Queue([friend]);
  const seen = new Set();
  let n = 1;
  while (n <= 2) {
    let i = friends.size;
    while (i > 0 && friends.size) {
      const next = friends.dequeue();
      seen.add(next);
      for (let nextFriend of FRIENDS[next]) {
        if (n < 2) {
          friends.queue(nextFriend);
          seen.add(nextFriend);
        } else if (!seen.has(nextFriend)) {
          output.push(nextFriend);
          seen.add(nextFriend);
        }
      }
      i--;
    }
    n++;
  }
  return output;
}

console.log(secondFriends('Tony')) // [ 'Mike', 'James', 'Eun Ji' ]

console.log(secondFriends('James')) // Sophie, Tony, Luke

function nthFriends(friend, level) {
  const output = [];
  const friends = new Queue([friend]);
  const seen = new Set();
  let n = 1;
  while (n <= level) {
    let i = friends.size;
    while (i > 0 && friends.size) {
      const next = friends.dequeue();
      seen.add(next);
      for (let nextFriend of FRIENDS[next]) {
        if (n < level && !seen.has(nextFriend)) {
          friends.queue(nextFriend);
          seen.add(nextFriend);
        } else if (!seen.has(nextFriend)) {
          output.push(nextFriend);
          seen.add(nextFriend);
        }
      }
      i--;
    }
    n++;
  }
  return output;
}

console.log(nthFriends('Tony', 3)) // [Luke]