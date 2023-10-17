/*
'''
❓ PROMPT
Design a simplified call center system that connects incoming calls to available operators.

The system should provide the following features:

* Add or release operators.
* Accept incoming calls.
* Assign calls to operators in the order they were received.
* If no operators are available, the calls should be queued and connected to an operator once one becomes available.

Implement a function that takes a list of actions and processes them. Each action is a tuple containing two strings.

The first string represents the action type ("add_operator", "receive_call", or "release_operator"), and the second string represents the ID of the operator or call.

# Add operator A
# Add operator B
# Receive call 1, connect it to operator A (first available)
# Receive call 2, connect it to operator B (next available)
# Release operator A from call 1
# Receive call 3, connect it to operator A (first available after release)
# Release operator B from call 2
# Receive call 4, connect it to operator B (first available after release)

Example(s)
actions = [
    ("add_operator", "A"),         
    ("add_operator", "B"),         
    ("receive_call", "1"),         
    ("receive_call", "2"),         
    ("release_operator", "A"),     
    ("receive_call", "3"),         
    ("release_operator", "B"),     
    ("receive_call", "4"),         
]

Output: [('1', 'A'), ('2', 'B'), ('3', 'A'), ('4', 'B')]
 

🔎 EXPLORE
List your assumptions & discoveries:
- can the list of actions be empty?
- will each call eventually have an operator?
 

Insightful & revealing test cases:
- only one operator
- 
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
1. initialize operators Que
2. initialize calls Que
3. initialize output array
4. iterate over actions
  if add_operator, push to operators queue
  else if receive_call
    if operator is avail
      pop operator from operators que
      push tuple to output array
    else push to calls que
  else if release_operator, push operator to operators que
5. loop while calls unanswered
  pop from calls que
  pop from operators que
  push tuple to output array
6. return output array  
    
 

🛠️ IMPLEMENT
function processCallCenterActions(actions) {) // returns list
def process_call_center_actions(actions: list[tuple]) -> list:
 

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

class Que {
  constructor() {
    this.dummy = new ListNode();
    this.tail = null;
    this.size = 0;
  }

  push(value) {
    const newTail = new ListNode(value);
    if (this.size > 0) {
      this.tail.next = newTail;
    } else {
      this.dummy.next = newTail;
    }
    this.tail = newTail;
    this.size ++;
  }

  pop() {
    if (this.size > 0) {
      const popped = this.dummy.next;
      this.dummy.next = this.dummy.next ? this.dummy.next.next : null;
      this.size --;
      return popped.value
    }
  }
}

function processCallCenterActions(actions) {
  const operators = new Que();
  const calls = new Que();
  const output = [];
  for (let [action, id] of actions) {
    if (action.includes('operator')) {
      if (calls.size > 0) {
        output.push([calls.pop(), id]);
      } else {
        operators.push(id);
      }
    } else if (action === "receive_call") {
      if (operators.size > 0) {
        output.push([id, operators.pop()]);
      } else {
        calls.push(id);
      }
    } 
  }
  return output;
}


// Test Case 1: No calls received
let actions = [
  ["add_operator", "A"],
  ["add_operator", "B"]
];
let result = processCallCenterActions(actions);
console.log(JSON.stringify(result) === JSON.stringify([]));

// Test Case 2: No operators available
actions = [
  ["receive_call", "1"],
  ["receive_call", "2"],
  ["receive_call", "3"]
];
result = processCallCenterActions(actions);
console.log(JSON.stringify(result) === JSON.stringify([]));

// Test Case 3: Multiple operators and calls, no releases
actions = [
  ["add_operator", "A"],
  ["add_operator", "B"],
  ["receive_call", "1"],
  ["receive_call", "2"],
  ["receive_call", "3"],
  ["receive_call", "4"]
];
result = processCallCenterActions(actions);
console.log(JSON.stringify(result) === JSON.stringify([['1', 'A'], ['2', 'B']]));

// Test Case 4: Alternating adding operators and receiving calls
actions = [
  ["add_operator", "A"],
  ["receive_call", "1"],
  ["add_operator", "B"],
  ["receive_call", "2"],
  ["add_operator", "C"],
  ["receive_call", "3"]
];
result = processCallCenterActions(actions);
console.log(JSON.stringify(result) === JSON.stringify([['1', 'A'], ['2', 'B'], ['3', 'C']]));

// Test Case 5: Complex Operation with releases
actions = [
  ["add_operator", "A"],
  ["add_operator", "B"],
  ["receive_call", "1"],
  ["receive_call", "2"],
  ["release_operator", "A"],
  ["receive_call", "3"],
  ["release_operator", "B"],
  ["receive_call", "4"],
  ["receive_call", "5"],
  ["receive_call", "6"],
  ["release_operator", "A"],
  ["release_operator", "B"]
];
result = processCallCenterActions(actions);
console.log(JSON.stringify(result) === JSON.stringify([['1', 'A'], ['2', 'B'], ['3', 'A'], ['4', 'B'], ['5', 'A'], ['6', 'B']]));

// Test Case 6: Releasing operators after calls
actions = [
  ["add_operator", "A"],
  ["add_operator", "B"],
  ["receive_call", "1"],
  ["receive_call", "2"],
  ["release_operator", "A"],
  ["release_operator", "B"],
  ["receive_call", "3"],
  ["receive_call", "4"]
];
result = processCallCenterActions(actions);
console.log(JSON.stringify(result) === JSON.stringify([['1', 'A'], ['2', 'B'], ['3', 'A'], ['4', 'B']]));

// Test Case 7: Releasing operators without any calls
actions = [
  ["add_operator", "A"],
  ["add_operator", "B"],
  ["release_operator", "A"],
  ["release_operator", "B"]
];
result = processCallCenterActions(actions);
console.log(JSON.stringify(result) === JSON.stringify([]));

// Test Case 8: Releasing operators while calls are waiting
actions = [
  ["receive_call", "1"],
  ["receive_call", "2"],
  ["add_operator", "A"],
  ["add_operator", "B"],
  ["release_operator", "A"],
  ["receive_call", "3"],
  ["release_operator", "B"],
  ["receive_call", "4"]
];
result = processCallCenterActions(actions);
console.log(JSON.stringify(result) === JSON.stringify([['1', 'A'], ['2', 'B'], ['3', 'A'], ['4', 'B']]));