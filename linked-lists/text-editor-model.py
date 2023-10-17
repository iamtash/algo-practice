'''
We're going to build the data model for a text editor that supports the basic operations needed for typing. This data model will take the form of a class that has methods for:
- typing one character at a time
- backspace and delete to remove text one character at a time
- moving the cursor

How can this class be designed so that the main operations are as efficient as possible?

EXAMPLES:
editor = TextEditor("Text").moveEnd();
editor.addChar('t').addChar(" ").addChar("E").addChar("d").addChar("i").addChar("t");
e2.toString();


Caly + Natasha:
Index based discussion.
["a", "d", "b", "c", "e"]
  ^       
  1
O(N) worse case insertion

Ingri:
Linked List :
O(1) insertion at cursor
O(1) deletion at cursor

Abdul:
# We need a prev pointer to support moveBack()

// Javascript
class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class ListNode:
    def __int__(self, value, next= None, prev=None):
        self.value = value
        self.next = next
        self.prev = prev



class TextEditor {

  // initialize the editor, optionally with some starter text
  constructor(initialText = "abcdeadsdawasd") {
    // Sentinel Node
    self.start = ListNode(None)
    self.end = ListNode(None)
    self.start.next, self.end.prev = self.end, self.start
    self.cursor = self.end

    for c in initialText:
        self.addChar(c)

    
  }

  // remove the character before the cursor
  backspace() {
  }

  // remove the character at the cursor. Cursor moves to the
  // next character.
  delete() {
  }

// prev <-> new <-> c <-> next
//                  ^  

  // add a new character before the cursor
 def addChar(c):
    prevNode = self.cursor.prev
    newNode = ListNode(c, self.cursor, prevNode)
    prevNode.next = newNode
    self.cursor.prev = newNode


  // move the cursor back one
  moveBack() {
  }

  // move the cursor forward one
  moveNext() {
  }

  // Move the cursor to the start. A new
  // character added here will be the first.
  moveStart() {
  }

  // move the cursor to the end. A new
  // character here will be last.
  moveEnd() {
  }

  // Return the text currently in the editor as a single string.
  // Can be O(n) in the size of the current text.
  toString() {

    //[start] -> ['a'] -> ... -> [end]
    //[start] -> [end]

    str = ''
    curr = self.start.next
    while curr.value:
        str += curr.value
        curr = curr.next
    return str
  }
  
}
'''

class ListNode:
    def __init__(self, value, nxt=None, prev=None):
        self.value = value
        self.next = nxt
        self.prev = prev

class TextEditor:
    def __init__(self, initialText=""):
        self.start = ListNode(None)
        self.end = ListNode(None)
        self.start.next = self.end
        self.end.prev = self.start
        self.cursor = self.end

        for c in initialText:
            self.addChar(c)

    def addChar(self, c):
        prevNode = self.cursor.prev
        newNode = ListNode(c, self.cursor, prevNode)
        prevNode.next = newNode
        self.cursor.prev = newNode
        return self

    # remove the character before the cursor
    '''
    [start] <- [cur]  // don't delete
    '''
    def backspace(self):
        #check if prev is self.start
        '''
                   /-----------------\
        [remove.prev] <- [remove] <- [self.cursor] 
                  \________________./ ^

            [remove].next == self.cursor
        '''
        if self.cursor.prev != self.start:
            remove = self.cursor.prev
            remove.prev.next = self.cursor
            self.cursor.prev = remove.prev

        

    # remove the character at the cursor. Cursor moves to the next character.
    def delete(self):
        #check if cursor is self.moveEn
        if self.cursor == self.end:
            return #what to do here
        
        nextNode = self.cursor.next
        prevNode = self.cursor.prev
        prevNode.next, nextNode.prev = nextNode, prevNode
        #do we have to clear cursor pointers? Nope, garbage collected.
        self.cursor = nextNode

    def toString(self):
        chars = []
        curr = self.start.next
        
        while curr.value:
            chars.append(curr.value)
            curr = curr.next
        return "".join(chars)

te = TextEditor("a")
print(te.toString())