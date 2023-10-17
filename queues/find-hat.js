/*
'''
❓ PROMPT
Oliver the Dog is missing his favorite hat and is asking his friends at the dog park if they've seen it. Each dog either has seen it or suggests a list of other dogs to ask. Return the name of the dog who has seen the hat. Oliver starts out by asking his best friend. This function will take two parameters. The first is a map of dogs to a list of their friends. The second is Oliver's best friend, who Oliver will ask first.

One of the most common uses of a queue is to keep a list of "work to be done". Just like doing housework, often new things get added to the to-do list while doing some other task. New jobs get added to the end of the queue, and when one is complete, the next one is taken from the top of the list.

As a follow-up, how would you handle it when there's circular knowledge? For example, Jono's suggestion is to ask Angus, and Angus' suggestion is to ask Jono. These 'cycles' aren't restricted to pairs of dogs, they can be of any size.

Example(s)
dogs = {
  'Carter': ['Fido', 'Ivy'],
  'Ivy': ["HAT"], // Ivy has seen the hat
  'Loki': ['Snoopy'],
  'Pepper': ['Carter'],
  'Snoopy': ['Pepper'],
  'Fido': []
}
findHat(dogs, 'Loki') == 'Ivy'
['Loki']
deque Loki, add Loki's list to queue --> [Snoopy]
deque Snoopy, add Snoopy's list to q --> [Pepper]
deque Pepper, add Pepper's list to q --> [Carter]
deque Carter, add Carter's list to q --> [Fido, Ivy]
deque Fido, add Fido's empty list to q --> [Ivy]
deque Ivy. first item is HAT. return Ivy.
 

🔎 EXPLORE
List your assumptions & discoveries:
- is it possible for no one to have seen the hat? what should i return if so?
 

Insightful & revealing test cases:
- "HAT" is at the end of the friend's list
- neither Ivy nor anyone else has seen the hat
- bigger list at the beginning
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 

 

🛠️ IMPLEMENT
function findHat(dogs, bestFriend) {
def findHat(dogs: dict, bestFriend: str) -> str:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor(head = null) {
    const realHead = head ? new ListNode(head) : null;s
    this.sentinel = new ListNode(0, realHead);
    this.head = realHead;
    this.tail = realHead;
    this.size = head == null ? 0 : 1;
  }

  enque(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.sentinel.next = this.head = this.tail = newNode;
      this.size = 1;
    } else {
      this.tail.next = this.tail = newNode;
      this.size += 1;
    }
  }

  deque() {
    const detached = this.head.value;
    this.head = this.head.next;
    this.size -= 1;
    return detached;
  }
}

function findHat(dogs, bestFriend) {
  const q = new Queue(bestFriend);
  const asked = new Set();

  while (q.size > 0) {
    const friend = q.deque();
    for (const seen of dogs[friend]) {
      if (seen == 'HAT') {
        return friend;
      }
      if (!asked.has(seen)) {
        q.enque(seen);
        asked.add(seen);
      }
    }
  }

  return "Couldn't find the hat";
}

let dogs = {
  'Carter': ['Fido', 'Ivy'],
  'Ivy': ["HAT"], // Ivy has seen the hat
  'Loki': ['Snoopy'],
  'Pepper': ['Carter'],
  'Snoopy': ['Pepper'],
  'Fido': []
}
console.log(findHat(dogs, 'Loki') == 'Ivy')

const dogs2 = {
  'Carter': ['Fido', 'Ivy'],
  'Ivy': ['mop', 'bop', "HAT"], // Ivy has seen the hat
  'Loki': ['Snoopy'],
  'Pepper': ['Carter'],
  'Snoopy': ['Pepper'],
  'Fido': []
}
console.log(findHat(dogs2, 'Loki') == 'Ivy')

const dogs3 = {
  'Carter': ['Fido', 'Ivy'],
  'Ivy': [],
  'Loki': ['Snoopy'],
  'Pepper': ['Carter'],
  'Snoopy': ['Pepper'],
  'Fido': []
}
console.log(findHat(dogs3, 'Loki') == "Couldn't find the hat")

const dogs4 = {
  'Carter': [],
  'Ivy': ["HAT"], // Ivy has seen the hat
  'Loki': ['Snoopy'],
  'Pepper': [],
  'Snoopy': ['Pepper', 'Carter', 'Fido', 'Ivy'],
  'Fido': []
}
console.log(findHat(dogs4, 'Loki') == "Ivy")

const dogs5 = {
  'Carter': ['Fido'],
  'Ivy': ["HAT"], // Ivy has seen the hat
  'Loki': ['Snoopy'],
  'Pepper': ['Carter'],
  'Snoopy': ['Pepper'],
  'Fido': []
}
console.log(findHat(dogs5, 'Loki') == "Couldn't find the hat")

const dogs6 = {
  'Carter': ['Fido', 'Ivy'],
  'Ivy': ["HAT"], // Ivy has seen the hat
  'Loki': ['Snoopy'],
  'Pepper': ['Carter'],
  'Snoopy': ['Jono', 'Pepper'],
  'Fido': [],
  'Jono': ['Angus'],
  'Angus': ['Jono']
}
console.log(findHat(dogs6, 'Loki') == 'Ivy')

dogs = {
  'Carter': ['Fido', 'Ivy'],
  'Ivy': ["HAT"], // Ivy has seen the hat
  'Loki': ['Snoopy'],
  'Pepper': ['Carter'],
  'Snoopy': ['Pepper'],
  'Fido': []
}

console.log(findHat(dogs, 'Loki') == "Ivy")
console.log(findHat(dogs, 'Snoopy') == "Ivy")
console.log(findHat(dogs, 'Ivy') == "Ivy")
console.log(findHat(dogs, 'Fido') == "Couldn't find the hat")

dogs = {
  'Ariel': ['Bork'],
  'Bork': ['Cassie'],
  'Cassie': ['Drex'],
  'Drex': ['Zoe'],
  'Zoe': ["HAT"],
}

console.log(findHat(dogs, "Ariel") == "Zoe")
console.log(findHat(dogs, "Bork") == "Zoe")
console.log(findHat(dogs, "Cassie") == "Zoe")
console.log(findHat(dogs, "Drex") == "Zoe")
console.log(findHat(dogs, "Zoe") == "Zoe")