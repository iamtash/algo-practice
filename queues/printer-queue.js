/*
'''
❓ PROMPT
You are asked to design a simple printer queue.

The printer can only perform one operation at a time and processes the print jobs in the order they are added to the queue. The actions parameter is a list of tuples, where each tuple contains one of the following commands:

("add", "document_name"): Add a new document to the print queue.
("print",): Print the next document in the queue.
("cancel", "document_name"): Cancel a document in the queue. If the document is not in the queue, do nothing.
The function should return a list of strings representing the names of the printed documents in the order they were printed.

Example(s)
actions = [
    ("add", "doc1"),    # Add 'doc1' to the queue
    ("add", "doc2"),    # Add 'doc2' to the queue
    ("print",),         # Print 'doc1' from the queue to the printed queue
    ("cancel", "doc1"), # Remove 'doc1' from the queue (do nothing)
    ("add", "doc3"),    # Add 'doc3' to the queue
    ("print",),         # Print 'doc2' from the queue to the printed queue
    ("print",)          # Print 'doc3' from the queue to the printed queue
]

QUEUE  | PRINTED
       | doc3 
       | doc2
       | doc1

result = printer_queue(actions)
print(result)  # Output: ['doc1', 'doc2', 'doc3']

<space />

Hint: What is the difference between a stack and a queue, and why do we use a queue in this question?

A: Queues follow First-In-First-Out (FIFO) principle, whereas Stacks are Last-In-First-Out (LIFO) principle. We use a queue in this particular problem because the documents added to the queue should be printed in the order it was added.
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
- the queue is an array of document names
- to enqeue, unshift
- to print, pop from queue, and push to printed queue
- printed queue is an array of document names. printed jobs are pushed.
- 

Time: O(N^2) because we have to unshift N times
Space: O(N)
 

📆 PLAN
Outline of algorithm #: 
1. create action queue array
2. create printed queue array
3. loop through actions
  if "add", unshift document name to action queue
  else if "print", pop last document name from action queue and push to printed queue
  else if "cancel", delete name from action queue if exists
4. return the printed queue 

 

🛠️ IMPLEMENT
function printerQueue(actions) {) // returns list
def printer_queue(actions: list) -> list:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function printerQueue(actions) {
  const toPrint = [];
  const printed = [];

  for (let [action, name] of actions) {
    if (action == "add") {
      toPrint.unshift(name);
    } else if (action == "print") {
      const next = toPrint.pop();
      next && printed.push(next);
    } else if (action == "cancel") {
      const index = toPrint.findIndex(tp => tp == name);
      index > -1 && toPrint.splice(index, 1);
    }
  }

  return printed;
}

let actions = [
  ["add", "doc1"],   
  ["add", "doc2"],   
  ["print"],         
  ["cancel", "doc1"],
  ["add", "doc3"],   
  ["print"],         
  ["print"]          
];
// [doc1, doc2, doc3]

const actions2 = [
  ["add", "foo"],
  ["print"],
  ["add", "bar"],
  ["print"],
  ["add", "baz"],
  ["print"]
];
// [foo, bar, baz]

const actions3 = [
  ["add", "foo"],
  ["cancel", "foo"],
  ["print"],
  ["add", "bar"],
  ["cancel", "bar"],
  ["print"],
  ["add", "baz"],
  ["cancel", "baz"],
  ["print"]
];
// []

const actions4 = [
  ["add", "foo"],
  ["cancel", "baz"],
  ["print"],
  ["add", "bar"],
  ["cancel", "foo"],
  ["print"],
  ["add", "baz"],
  ["cancel", "bar"],
  ["print"]
];
// [foo, bar, baz]

// console.log(printerQueue(actions));
// console.log(printerQueue(actions2));
// console.log(printerQueue(actions3));
// console.log(printerQueue(actions4));
// console.log(printerQueue([]));

// Test Case 1: Basic operations
actions = [
  ["add", "doc1"],
  ["add", "doc2"],
  ["print"],
  ["print"]
];
let result = printerQueue(actions);
console.log(result);  // Output: ['doc1', 'doc2']

// Test Case 2: Cancel operation
actions = [
  ["add", "doc1"],
  ["add", "doc2"],
  ["cancel", "doc2"],
  ["print"],
  ["print"]
];
result = printerQueue(actions);
console.log(result);  // Output: ['doc1']

// Test Case 3: Cancel non-existent document
actions = [
  ["add", "doc1"],
  ["cancel", "doc2"],
  ["print"],
  ["print"]
];
result = printerQueue(actions);
console.log(result);  // Output: ['doc1']

// Test Case 4: Empty input
actions = [];
result = printerQueue(actions);
console.log(result);  // Output: []

// Test Case 5: Complex operations
actions = [
  ["add", "doc1"],
  ["add", "doc2"],
  ["print"],
  ["cancel", "doc1"],
  ["add", "doc3"],
  ["print"],
  ["print"],
  ["cancel", "doc4"],
  ["add", "doc5"],
  ["print"],
  ["add", "doc6"],
  ["cancel", "doc6"],
  ["print"],
];
result = printerQueue(actions);
console.log(result);  // Output: ['doc1', 'doc2', 'doc3', 'doc5']