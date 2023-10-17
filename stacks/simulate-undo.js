/*
'''
❓ PROMPT
Write a function to simulate the undo operation in a text editor and outputs the final text after applying all of the commands. The editor supports the following three commands:

"append <char>": Append the character <char> to the end.

"backspace": Delete the last character.

"undo": Undo the most recent change to the document.

The "undo" command should revert the most recent change made to the text. Meaning if the most recent command was "append", it should remove that character. If the subsequent command was "backspace", it should add the character back in.

Example(s)
commands = ["append a", "append b", "backspace", "append c", "undo", "append d", "undo", "append e"]

Output: "ae"

Explanation:
* append a: appends "a"
* append b: appends "b"
* backspace: removes "b"
* append c: appends "c"
* undo: removes "c"
* append d: appends "d"
* undo: removes "d"
* append e: appends "e"

[a] ['append a']
[ab] ['append a', 'append b']
[a] ['append a', 'append b', 'backspace]
[ac] ['append a', 'append b', 'backspace', 'append c']
[a] ['append a', 'append b', 'backspace']
[ad] ['append a', 'append b', 'backspace', 'append d']
[a] ['append a', 'append b', 'backspace']
[ae] ['append a', 'append b', 'backspace', 'append e']

output stored as array. all we need is push and pop.
as commands are executed, we add the inverse of the command to a stack. 
  if the command is 'append a', add delete to stack
  if the command if 'backspace', add append and the key that is appended to the stack
when we hit 'undo', pop the last command and execute (do not add to a stack). 
 

🔎 EXPLORE
List your assumptions & discoveries:
- can we undo an undo? once a command is undone, can it be redone?
- will back to back undos undo the last two distinct commands, or will the second undo undo the first undo?
- is it possible to have more 'undos' than commands?
- will append always just pass a single char?
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
init output to empty array
init commands to empty stack
loop over list of commands
  if amend, push key to output, & push 'delete' to commands
  else if backspace
    pop last key in output
    push [ amend, key ] to commands stack
  else if undo & if there are any commands
    pop last command
    execute command
join and return output as string
 

🛠️ IMPLEMENT
function simulateUndo(commands) {
def simulateUndo(commands: list[str]) -> str:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function simulateUndo(commands) {
  const output = [];
  const undoCommands = [];

  for (let command of commands) {
    if (command.startsWith('append')) {
      const char = command.split('append ')[1];
      for (let c of char) {
        output.push(c);
      }
      undoCommands.push(['backspace', char.length]);
    } else if (command === 'backspace' && output.length) {
      const char = output.pop();
      undoCommands.push(['append', char]);
    } else if (command === 'undo' && undoCommands.length) {
      const action = undoCommands.pop();
      if (action[0] === 'backspace') {
        let i = action[1];
        while (i > 0) {
          output.pop();
          i--;
        }
      } else if (action[0] === 'append') {
        for (let char of action[1]) {
          output.push(char);
        }
      }
    }
  }

  return output.join('');
}

console.log(simulateUndo(["append a", "append b", "backspace", "append c", "undo", "append d", "undo", "append e"])) // 'ae'

console.log(simulateUndo(["append a", "backspace"])); // ''

console.log(simulateUndo(["append a", "backspace", "backspace"])); // ''

console.log(simulateUndo(["append b", "append c", "undo", "undo"])) // ''

console.log(simulateUndo(["undo", "append a", "append b", "backspace", "append c", "undo", "append d", "undo", "append e"])) // 'ae'

// Test Case 1: Basic operations
console.log(simulateUndo(["append a", "append b", "append c", "backspace", "undo"]) === "abc");

// Test Case 2: Multiple undos
console.log(simulateUndo(["append a", "append b", "append c", "backspace", "undo", "undo"]) === "ab");

// Test Case 3: Empty input
console.log(simulateUndo([]) === "");

// Test Case 4: Complex operations
console.log(simulateUndo(["append a", "append b", "backspace", "append c", "undo", "append d", "undo", "append e"]) === "ae");

// Test Case 5: Undo with no history
console.log(simulateUndo(["undo"]) === "");

// Test Case 6: Backspace with empty text
console.log(simulateUndo(["backspace"]) === "");

// Test Case 7: Multiple backspaces
console.log(simulateUndo(["append a", "append b", "append c", "backspace", "backspace"]) === "a");

// Test Case 8: Undo after multiple backspaces
console.log(simulateUndo(["append a", "append b", "append c", "backspace", "backspace", "undo", "undo"]) === "abc");

// Test Case 9: Continuous undos and backspaces
console.log(simulateUndo(["append a", "append b", "append c", "undo", "undo", "undo", "backspace", "backspace", "backspace", "append d", "append e", "append f"]) === "def");

